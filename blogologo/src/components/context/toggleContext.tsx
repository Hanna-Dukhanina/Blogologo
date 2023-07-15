import React, { ReactNode, useState } from 'react'

interface Itoggle {
    isActiveValue: boolean;
    isActiveFunction: () => void;
}

interface Iprops {
    children: ReactNode
}

export const ToggleContext = React.createContext({} as Itoggle)

function ToggleContextProvider(props: Iprops) {
    const [isActive, setIsActive] = useState(false)

    const activateDarkMode = function () {
        setIsActive((prev) => !prev)
    }

    const values: Itoggle = {
        isActiveFunction: activateDarkMode,
        isActiveValue: isActive
    }

    return (
        <ToggleContext.Provider value={values}>
            {props.children}
        </ToggleContext.Provider>
    )
}
export default ToggleContextProvider