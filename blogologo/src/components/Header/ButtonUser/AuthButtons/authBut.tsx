import React from "react"
import { useAuthContext } from "./authProvider"
import style from '../../ButtonUser/style.module.scss'

const AuthButtons = () => {
    const { isAuthorized, signin, logout } = useAuthContext()

    return (
        <div className={style['isAuth']}>
            {
                <a href='/pageSignIn' className={style['signIn']} onClick={signin}>Sign in</a>
            }
        </div >
    )
}

export default AuthButtons