import { createContext, useReducer } from "react";
import React from "react";

const seasonReducer = (state, action) => {
    switch (action.type) {
        case 'SET_YEAR':
            return { ...state, yearSeason: action.payload };
        default:
            return state;
    }
}

const INITIAL_STATE = {
    yearSeason: 2025
};

export const SeasonContext = createContext();

const SeasonProvider = ({ children }) => {

    const [state, dispatch] = useReducer(seasonReducer, INITIAL_STATE);

    const setYearSeason = (year) => {
        dispatch({ type: 'SET_YEAR', payload: year });
    }

    return (
        <SeasonContext.Provider value={{ yearSeason: state.yearSeason, setYearSeason }} >
            {children}
        </SeasonContext.Provider>
    )
};

export default SeasonProvider;