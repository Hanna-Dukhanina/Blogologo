import { createContext, ReactNode, useState, useContext } from "react"

type AuthContextType = {
    isAuthorized: boolean
    signin: () => void
    logout: () => void
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

type AuthProviderProps = {
    children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {

    const [auth, setAuth] = useState(false)

    const signin = () => setAuth(true)
    const logout = () => setAuth(false)

    const providerValue: AuthContextType = {
        isAuthorized: auth,
        signin: signin,
        logout: logout
    }

    return (
        <AuthContext.Provider value={providerValue}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    return useContext(AuthContext)
}