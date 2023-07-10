import axios from "axios"
import { useEffect, useState } from "react"
import { Pager } from "../../../Pager"
import { EntranceContent } from "../../../pages/BlogPage/entrancePage"
import { PinProps } from "../../../pages/BlogPage/type"
import style from './style.module.scss'

const Main = () => {
    const [entrancePin, setEntrancePin] = useState<PinProps[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const postsPerPage = 12

    async function fetchPins() {
        const response = await axios.get<{ items: PinProps[] }>('https://mockside.vercel.app/api/posts');
        setEntrancePin(response.data.items)
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
                    <EntranceContent pin={pin} key={pin.id} />
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
export default Main       