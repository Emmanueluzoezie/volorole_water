import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";

interface IstateContext {
    showMenu: boolean
    setShowMenu: Dispatch<SetStateAction<boolean>>
    showContacts: boolean
    setShowContacts: Dispatch<SetStateAction<boolean>>
    showMoreServiceNav: boolean
    setShowMoreServiceNav: Dispatch<SetStateAction<boolean>>
    machineType: string
    setMachineType: Dispatch<SetStateAction<string>>
    
}

const initialState = {
    showMenu: false,
    setShowMenu: () => false,
    showContacts: false,
    setShowContacts: () => false,
    showMoreServiceNav: false,
    setShowMoreServiceNav: () => false,
    machineType: "All machines",
    setMachineType: () => "",
}

const StateContext = createContext<IstateContext>(initialState)

interface Childern {
    children: React.ReactNode
}

export const ContextProvider: React.FC<Childern> = ({ children }) => {
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const [showContacts, setShowContacts] = useState<boolean>(false)
    const [showMoreServiceNav, setShowMoreServiceNav] = useState<boolean>(false)
    const [machineType, setMachineType] = useState<string>("All machines")

    return (
        <StateContext.Provider value={{ showMenu, setShowMenu, showContacts, setShowContacts, showMoreServiceNav, setShowMoreServiceNav, machineType, setMachineType  }}>
    { children }
    </StateContext.Provider>
    )
}
export const useContextState = () => useContext(StateContext)