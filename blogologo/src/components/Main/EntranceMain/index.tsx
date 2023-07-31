import React from "react"
import { useSelector } from "react-redux"
import { StateType } from "../../../store/ChangeTheme/types"
import Header from "./Header"
import Posts from "./Posts"
import style from './style.module.scss'

const EntrancePage = () => {
    const isActiveValue = useSelector((state: StateType) => state.theme)

    return (
        <div className={`${style.entrancePage} ${isActiveValue ? style['dark_mode'] : ''}`}>
            <Header />
            <Posts />
        </div>
    )
}

export default EntrancePage