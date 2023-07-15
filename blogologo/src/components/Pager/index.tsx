import React from "react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
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
                                className={currentPage === Number(item) ? style['current-page'] : ''}
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
