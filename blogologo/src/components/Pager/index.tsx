import React, { useContext } from "react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ToggleContext } from "../context/toggleContext"
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

    const { isActiveValue } = useContext(ToggleContext)
    const clickPage = `${style['current-page']} ${isActiveValue ? style['dark_mode'] : ''}`

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
