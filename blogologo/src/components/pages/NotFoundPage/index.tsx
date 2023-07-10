import style from './style.module.scss'
import notFoundPage from '../NotFoundPage/pageNotFound.jpg'

export const NotFoundPage = () => {
    return (
        <div className={style['notFoundPage']}>
            <img className={style['img']} src={notFoundPage} alt='' />
            <p className={style['text']}>Oops, page not Found...</p>
        </div>
    )
}