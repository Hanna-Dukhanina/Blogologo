import React from "react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getPosts } from "../../../../services/postService"
import { Pager } from "../../../Pager"
import { EntranceContent } from "../../../pages/BlogPage/entrancePage"
import { PinProps } from "../../../pages/BlogPage/type"
import style from './style.module.scss'

const Posts = () => {
    const [entrancePin, setEntrancePin] = useState<PinProps[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const postsPerPage = 12

    async function fetchPins() {
        try {
            const response = await getPosts()
            setEntrancePin(response)
        } catch (error) {
            console.error('Ошибка при получении пинов:', error)
        }
    }

    useEffect(() => {
        fetchPins()
    }, [])

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = entrancePin.slice(indexOfFirstPost, indexOfLastPost)

    return (
        <div className={style['entranceMain']}>
            <div className={style['main']}>
                {currentPosts.map((pin) => (
                    <Link to={`/entrancePage/${pin.id}`} key={pin.id}>
                        {<EntranceContent pin={pin} />}
                    </Link>
                ))}
            </div>
            <div className={style['shellPager']}>
                <Pager
                    total={entrancePin.length}
                    itemPerPage={postsPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    )
}
export default Posts       