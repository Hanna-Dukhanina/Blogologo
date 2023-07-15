import React from "react"
import { useState } from "react"
import AuthButtons from "./AuthButtons/authBut"
import { AuthProvider } from "./AuthButtons/authProvider"
import style from './style.module.scss'

const UserBtn = () => {

    const [isOpen, setIsOpen] = useState(false)

    const Menu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <div
                className={`${style['menu-button']} ${isOpen ? style['menu-button-open'] : ''}`}
                onClick={Menu}
            >
                <div>User</div>
            </div>
            {isOpen && (
                <div className={style['dropdown-menu']}>
                    <div className={style['menu']}>
                        <AuthProvider>
                            <div className={style['shellSignIn']}>
                                <AuthButtons />
                            </div>
                        </AuthProvider>
                    </div>
                </div>
            )}
        </div>
    )
}

export default UserBtn