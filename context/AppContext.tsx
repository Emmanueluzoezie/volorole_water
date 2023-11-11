import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";

interface IstateContext {
    showMenu: boolean
    setShowMenu: Dispatch<SetStateAction<boolean>>
    showContacts: boolean
    setShowContacts: Dispatch<SetStateAction<boolean>>
    showMoreServiceNav: boolean
    setShowMoreServiceNav: Dispatch<SetStateAction<boolean>>
}

const initialState = {
    showMenu: false,
    setShowMenu: () => false,
    showContacts: false,
    setShowContacts: () => false,
    showMoreServiceNav: false,
    setShowMoreServiceNav: () => false,
}

const StateContext = createContext<IstateContext>(initialState)

interface Childern {
    children: React.ReactNode
}

export const ContextProvider: React.FC<Childern> = ({ children }) => {
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const [showContacts, setShowContacts] = useState<boolean>(false)
    const [showMoreServiceNav, setShowMoreServiceNav] = useState<boolean>(false)

    return (
        <StateContext.Provider value={{ showMenu, setShowMenu, showContacts, setShowContacts, showMoreServiceNav, setShowMoreServiceNav  }}>
    { children }
    </StateContext.Provider>
    )
}
export const useContextState = () => useContext(StateContext)