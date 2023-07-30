import { PostType, TmsResponseType } from "../../api/postService"

export type PostsStateType = {
  count: number
  list: PostType[]
}

export type PostsActionType = {
  type: string
  payload: TmsResponseType | string
}