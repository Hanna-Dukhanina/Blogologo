import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { PinProps } from '../BlogPage/type'
import { getPosts } from '../../../services/postService'
import style from './PostListPage.scss'

const PostListPage = () => {
    const [posts, setPosts] = useState<PinProps[]>([])
    const [isFirstPage, setFistPage] = useState(true)

    useEffect(() => {
        if (isFirstPage) {
            getPosts().then(res => setPosts(res))
        } else {
            getPosts().then(res => setPosts(res))
        }

    }, [])

    return (
        <>
            <div>
                <h1>Posts</h1>
            </div>
            <div className={style['post-list']}>
                {
                    posts.map(post => (
                        <div key={post.id} className={style['post']}>
                            <Link to={'/posts/' + post.id}>{post.title}</Link>
                            <img src={post.image} />
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default PostListPage