import { useEffect, useState } from "react";
import { createContext } from "react";
import getState from "./flux";

export const AppContext = createContext(null);

const StoreWrapper = ({ children }) => {
    const [state, setState] = useState(getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: (updateStore) => setState({
            store: Object.assign(state.store, updateStore),
            actions: {...state.actions}
        })
    }));

    useEffect(() => {
        state.actions.checkUser();
    }, [])

    return (
        <AppContext.Provider value={state}>
            {children}
        </AppContext.Provider>
    )
}

export default StoreWrapper;