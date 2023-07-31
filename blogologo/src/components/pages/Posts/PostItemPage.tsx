import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getPost } from '../../../services/postService'
import style from './style.module.scss'
import { PinProps } from '../BlogPage/type'
import { useSelector } from 'react-redux'
import { StateType } from '../../../store/ChangeTheme/types'


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

    const isActiveValue = useSelector((state: StateType) => (state.theme as unknown as StateType).theme)

    return (
        <div className={`${style['shellpost']}  ${isActiveValue === 'dark' ? style['dark_mode'] : ''}`}>
            <div className={`${style['post']}  ${isActiveValue === 'dark' ? style['dark_mode'] : ''}`}>
                <div className={style['backBtn']}>
                    <div className={style['btn']}>
                        <p onClick={clickBack}>Haзад</p>
                    </div>
                </div>
                <div className={style['pin']}>
                    <p className={style['title']}>{post.title}</p>
                    <div className={style['img']}>
                        <img src={post.image} />
                    </div>
                    <p className={style['text']}>{post.text}</p>
                    <p className={style['createdAt']}>{post.createdAt}</p>
                </div>
            </div>
        </div>
    )
}

export default PostItemPage