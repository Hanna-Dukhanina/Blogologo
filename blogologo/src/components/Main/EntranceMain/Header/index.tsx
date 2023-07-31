import React from 'react'
import { useSelector } from 'react-redux'
import { StateType } from '../../../../store/ChangeTheme/types'
import style from './style.module.scss'

const Header = () => {
    const isActiveValue = useSelector((state: StateType) => (state.theme as unknown as StateType).theme)

    return (
        <div className={style.entranceHeader}>
            <div className={style['header']}>
                <div className={style['upIndent']}></div>
                <div className={style['articlesNews']}>
                    <div className={`${style.blog} ${isActiveValue === 'dark' ? style['dark_mode'] : ''}`}>Blog</div>
                    <div className={style['artN']}>
                        <div className={`${style.articles} ${isActiveValue === 'dark' ? style['dark_mode'] : ''}`}>Articles</div>
                        <div className={`${style.news} ${isActiveValue === 'dark' ? style['dark_mode'] : ''}`}>News</div>
                    </div>
                </div>
                <div className={style['downIndent']}>
                    <div className={style['timeInterval']}>
                        <div className={`${style.day} ${isActiveValue === 'dark' ? style['dark_mode'] : ''}`}>Day</div>
                        <div className={`${style.week} ${isActiveValue === 'dark' ? style['dark_mode'] : ''}`}>Week</div>
                        <div className={`${style.month} ${isActiveValue === 'dark' ? style['dark_mode'] : ''}`}>Month</div>
                        <div className={`${style.year} ${isActiveValue === 'dark' ? style['dark_mode'] : ''}`}>Year</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header