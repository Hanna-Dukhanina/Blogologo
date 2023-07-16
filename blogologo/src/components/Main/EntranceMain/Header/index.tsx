import React, { useContext } from 'react'
import { ToggleContext } from '../../../context/toggleContext'
import style from './style.module.scss'

const Header = () => {
    const { isActiveValue } = useContext(ToggleContext)

    return (
        <div className={style.entranceHeader}>
            <div className={style['header']}>
                <div className={style['upIndent']}></div>
                <div className={style['articlesNews']}>
                    <div className={`${style.blog} ${isActiveValue ? style['dark_mode'] : ''}`}>Blog</div>
                    <div className={style['artN']}>
                        <div className={`${style.articles} ${isActiveValue ? style['dark_mode'] : ''}`}>Articles</div>
                        <div className={`${style.news} ${isActiveValue ? style['dark_mode'] : ''}`}>News</div>
                    </div>
                </div>
                <div className={style['downIndent']}>
                    <div className={style['timeInterval']}>
                        <div className={`${style.day} ${isActiveValue ? style['dark_mode'] : ''}`}>Day</div>
                        <div className={`${style.week} ${isActiveValue ? style['dark_mode'] : ''}`}>Week</div>
                        <div className={`${style.month} ${isActiveValue ? style['dark_mode'] : ''}`}>Month</div>
                        <div className={`${style.year} ${isActiveValue ? style['dark_mode'] : ''}`}>Year</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header