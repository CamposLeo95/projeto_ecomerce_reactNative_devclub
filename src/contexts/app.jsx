import {createContext } from 'react'

export const AppContext = createContext({})

export default ContextProvider = ({children}) => {
    return(
        <AppContext.Provider value={{name: 'leo'}}>
            {children}
        </AppContext.Provider>
    )
}