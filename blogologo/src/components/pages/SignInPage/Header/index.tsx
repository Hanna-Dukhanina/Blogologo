import React from 'react'
import style from './style.module.scss'


const HeaderSignIn = () => {
    return (
        <div className={style['shellHeader']}>
            <div className={style['header']}>
                <div className={style['homeBtn']}>
                    <a href="/entrancePage" >Back to Home</a>
                </div>
                <div className={style['title']}>
                    Sign In
                </div>
            </div>
        </div>
    )
}

export default HeaderSignIn