import React, { useContext } from "react"
import { ToggleContext } from "../../context/toggleContext"
import Header from "./Header"
import Posts from "./Posts"
import style from './style.module.scss'

const EntrancePage = () => {
    const { isActiveValue } = useContext(ToggleContext)

    return (
        <div className={`${style.entrancePage} ${isActiveValue ? style['dark_mode'] : ''}`}>
            <Header />
            <Posts />
        </div>
    )
}

export default EntrancePage