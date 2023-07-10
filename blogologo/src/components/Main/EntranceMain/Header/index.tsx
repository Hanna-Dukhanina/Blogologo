import style from './style.module.scss'

const Header = () => {
    return (
        <div className={style['entranceHeader']}>
            <div className={style['header']}>
                <div className={style['upIndent']}></div>
                <div className={style['articlesNews']}>
                    <div className={style['blog']}>Blog</div>
                    <div className={style['artN']}>
                        <div className={style['articles']}>Articles</div>
                        <div className={style['news']}>News</div>
                    </div>
                </div>
                <div className={style['downIndent']}>
                    <div className={style['timeInterval']}>
                        <div className={style['day']}>Day</div>
                        <div className={style['week']}>Week</div>
                        <div className={style['month']}>Month</div>
                        <div className={style['year']}>Year</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header