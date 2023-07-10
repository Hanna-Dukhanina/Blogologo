import style from './style.module.scss'
import logo from '../Header/img/Logo.jpg'
import lupa from '../Header/img/Lupa.jpg'

export const Header = () => {
    return (
        <div className={style['header']}>
            <div className={style['logo']}>
                <img src={logo} alt='' />
            </div>
            <div className={style['authorize']}>
                <div className={style['search']}>
                    <img src={lupa} alt="" />
                </div>
                <div className={style['user']}>User</div>
            </div>
        </div>
    )
}
