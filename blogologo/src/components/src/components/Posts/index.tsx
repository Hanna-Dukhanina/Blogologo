import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { AppDispatch, AppState } from '../../store'
import { loadPostsAction } from '../../store/posts/action'
import styles from './styles.module.scss'

export const Posts = () => {
  const { page } = useParams() // page = 5
  const dispatch = useDispatch<AppDispatch>()
  const posts = useSelector((state: AppState) => state.posts.list)

  useEffect(() => {
    if (page) {
      dispatch(loadPostsAction(4, (+page - 1) * 4))  // limit=4 offset=(page-1)*4
    }
  }, [page, dispatch])

  return (
    <>
      {
        posts.map(post => (
          <div key={post.id} className={styles.post}>
            {post.id} - {post.title}
            <img className={styles.image} src={post.image} />
          </div>
        ))
      }
    </>
  )
}
