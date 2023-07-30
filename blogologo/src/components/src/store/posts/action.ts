import { AppThunk } from ".."
import { TmsResponseType, getPosts } from '../../api/postService'
import { PostsActionType } from "./types"

export const setPosts = (posts: TmsResponseType): PostsActionType => {
  return {
    type: "LOAD_POSTS",
    payload: posts
  }
}

export const loadPostsAction = (limit: number, offset: number): AppThunk => {
  return (dispatch, getState) => {
    getPosts(limit, offset)
      .then(posts => dispatch(setPosts(posts.data)))
  }
}
