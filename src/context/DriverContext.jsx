import { createContext, useEffect, useContext, useReducer } from "react";
import React from "react";
import { SeasonContext } from "./SeasonContext";
import { toast } from 'react-toastify'

export const DriverContext = createContext();

const initialState = {
    selectDriver: "",
    driverData: null,
    driversData: null,
    isLoading: true, // Adicionado para feedback de carregamento
}

const reducer = (state, action) => {
    switch(action.type){
        case "set_select_driver":
            return {...state, selectDriver: action.payload};
        case "set_driver_data":
            return {...state, driverData: action.payload};
        case "set_drivers_data":
            return {...state, driversData: action.payload};
        case "set_loading":
            return {...state, isLoading: action.payload};
        default:
            throw Error('Not found action: ' + action.type);
    };
};

const DriverProvider = ({children}) =>{
    const [driverComponent, tableComponent] = React.Children.toArray(children);

    const { yearSeason } = useContext(SeasonContext);

    const [state, dispatch] = useReducer(reducer, initialState)
    const { selectDriver, driverData, driversData, isLoading } = state;

    useEffect(()=>{
        const fetchAllDrivers = async () => {
            if(!yearSeason) return;

            dispatch({ type: 'set_loading', payload: true });
            try{
                const response = await fetch(`https://ergast.com/api/f1/${yearSeason}/drivers.json`);
                if (!response.ok) {
                    throw new Error(`Erro API F1: ${response.status}`);
                }
                const data = await response.json();
                dispatch({
                    type: 'set_drivers_data',
                    payload: data.MRData.DriverTable.Drivers
                })
            } catch (error){
                toast.error("Erro ao buscar dados dos pilotos.");
                console.error('Error to find data of the drivers:', error);
            } finally {
                dispatch({ type: 'set_loading', payload: false });
            }
        };

        fetchAllDrivers();
    }, [yearSeason])

    useEffect(()=>{
        const fetchDriver = async () => {
            if(!selectDriver || !yearSeason) return;

            try{
                const response = await fetch(`https://ergast.com/api/f1/${yearSeason}/drivers/${selectDriver}.json`);
                if (!response.ok) {
                    throw new Error(`Erro API F1: ${response.status}`);
                }
                const data = await response.json();
                dispatch({
                    type: 'set_driver_data',
                    payload: data.MRData.DriverTable.Drivers[0] || null
                })
            }catch (error){
                toast.error("Erro ao procurar dados do piloto.");
                console.error('Error to find data of the driver', error);
            }
        };

        if(selectDriver) fetchDriver();
    }, [selectDriver, yearSeason])

    return (
        <DriverContext.Provider value={{ driverData, driversData, isLoading, setSelectDriver: (driverId) =>
            dispatch({ type: 'set_select_driver', payload: driverId }) }} >
            {tableComponent}
            {selectDriver && driverComponent}
        </DriverContext.Provider>
    )
};

export default DriverProvider;