import React from 'react'
import style from './style.module.scss'


const HeaderSignUp = () => {
    return (
        <div className={style['shellHeader']}>
            <div className={style['header']}>
                <div className={style['homeBtn']}>
                    <a href="/entrancePage" >Back to Home</a>
                </div>
                <div className={style['title']}>
                    Sign Up
                </div>
            </div>
        </div>
    )
}

export default HeaderSignUp