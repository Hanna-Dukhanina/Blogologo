import React from "react"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getPost } from "../../../services/GetPost/getPost"
import { PinProps } from "../BlogPage/type"
import style from './style.module.scss'


const PostItemPage = () => {
    const { postId } = useParams()
    const navigate = useNavigate()

    const [post, setPost] = useState<PinProps>({} as PinProps)

    useEffect(() => {
        if (postId) {
            getPost(postId).then(response => setPost(response))
        }
    }, [postId])

    const clickBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <div>
                <h2 onClick={clickBack}>Haзад</h2>
            </div>
            post id: {postId}
            <div className={style['post']}>
                <h2>{post.title}</h2>
                <img src={post.image} alt='' />
            </div>
        </div>
    )
}

export default PostItemPage
