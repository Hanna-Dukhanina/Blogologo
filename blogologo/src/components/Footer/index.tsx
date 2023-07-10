import style from './style.module.scss'
import off from './switchOff.svg'

const Footer = () => {
    return (
        <div className={style['footer']}>
            <div className={style['contentFooter']}>
                <div className={style['label']}>©2023 Blogologo</div>
                <div className={style['darkTheme']}>
                    <div className={style['text']}>Dark theme</div>
                    <div className={style['button']}>
                        <img src={off} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer