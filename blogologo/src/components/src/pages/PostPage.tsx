import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Pager } from '../components/Pager'
import { Posts } from '../components/Posts'
import { AppDispatch, AppState } from '../store'
import { loadPostsAction } from '../store/posts/action'

export const PostPage = () => {
  const { page } = useParams() // page = 5
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(loadPostsAction(4, 0))
  }, [dispatch])
  const total = useSelector((state: AppState) => state.posts.count)

  return (
    <>
      <Posts />

      <Pager total={total} itemPerPage={4} currentPage={page ? +page : 1} />
    </>
  )
}
