import React from "react"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { StateType } from "../../store/ChangeTheme/types"
import { getPages } from "./getPages"
import style from './style.module.scss'


type PagerProps = {
    total: number;
    itemPerPage: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
}

export const Pager = ({ total, itemPerPage, currentPage, setCurrentPage }: PagerProps) => {

    const [pages, setPages] = useState<(number | string)[]>([])

    useEffect(() => {
        setPages(getPages(total, itemPerPage, currentPage))
    }, [total, itemPerPage, currentPage])

    const isActiveValue = useSelector((state: StateType) => (state.theme as unknown as StateType).theme)
    const clickPage = `${style['current-page']} ${isActiveValue === 'dark' ? style['dark_mode'] : ''}`

    return (
        <div className={style['pager']}>
            {
                pages.map((item) => (
                    item === '...'
                        ? (
                            <span key={item}>{item}</span>
                        ) : (
                            <Link
                                key={item}
                                to={`/entrancePage/${item}`}
                                className={currentPage === Number(item) ? clickPage : ''}
                                onClick={() => setCurrentPage(Number(item))}
                            >
                                {item}
                            </Link>
                        )
                ))
            }
        </div>
    )
}    
