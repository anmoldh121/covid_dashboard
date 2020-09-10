import React from 'react';

const initialState = {
    stateWise: [],
    stats: {},
    map: {},
    totalStats: {},
};

const store = React.createContext(initialState);

const StateProvider = ({children}) => {
    const [state, dispatch] = React.useReducer((state, action) => {
        switch (action.type) {
            case "SET_STATEWISE":
                return {...state, stateWise: action.payload};
            case "SET_STATS":
                return {...state, stats: action.payload};
            case "SET_STATE":
                return {...state, map: action.payload};
            case "SET_TOTALSTATS" :
                return {...state, totalStats: action.payload};
            default:
                return {...state};
        }
    }, initialState);

    return <store.Provider value={{state, dispatch}}>{children}</store.Provider>
};

export {store, StateProvider}
