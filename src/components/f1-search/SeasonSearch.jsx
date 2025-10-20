import React, { useContext, useState } from 'react';
import { F1Context } from '../../contexts/F1Context.jsx';
import { ACTIONS } from '../../contexts/F1Reducer.jsx';
import { TextField, Button, Box, Typography, Alert, CircularProgress } from '@mui/material';

const API_BASE_URL = 'https://api.jolpi.ca//ergast/f1/';

export default function SeasonSearch() {
  const { state, dispatch } = useContext(F1Context);
  const [year, setYear] = useState('');


  const fetchData = async (searchYear) => {
    const url = `${API_BASE_URL}${searchYear}/results.json`;
    dispatch({ type: ACTIONS.FETCH_START });

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Erro ${response.status}: Temporada não encontrada.`);
      }
      const data = await response.json();
      dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: data });
    } catch (err) {

      dispatch({ type: ACTIONS.FETCH_ERROR, payload: err.message });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.CLEAR_ERROR });

    const currentYear = new Date().getFullYear();

    if (!year || year.length !== 4 || isNaN(year) || year < 1950 || year > currentYear) {

      dispatch({ type: ACTIONS.SET_VALIDATION_ERROR, payload: `Por favor, insira um ano válido entre 1950 e ${currentYear}.` });
      return;
    }

    dispatch({ type: ACTIONS.SET_VALIDATION_ERROR, payload: null });
    fetchData(year);
  };

  return (

    <Box sx={{ padding: 3, border: '1px solid #ccc', borderRadius: 2, mb: 3 }}>
      <Typography variant="h5" component="h3" gutterBottom>
        Buscar Resultados da Temporada de F1
      </Typography>
      
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <TextField
          label="Ano da Temporada"
          variant="outlined"
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="Ex: 2023"
          inputProps={{ min: 1950, max: new Date().getFullYear(), maxLength: 4 }}
          required
          disabled={state.loading}
          fullWidth
        />
        <Button 
          type="submit" 
          variant="contained" 
          color="error" 
          disabled={state.loading}
          sx={{ minWidth: 120 }}
        >
          {}
          {state.loading ? <CircularProgress size={24} color="inherit" /> : 'Buscar'}
        </Button>
      </Box>

      {}
      {state.validationError && (
        <Alert severity="warning" sx={{ mb: 2 }}>
          {state.validationError}
        </Alert>
      )}
      
      {}
      {state.error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          Erro na Busca: {state.error}
        </Alert>
      )}
    </Box>
  );
}