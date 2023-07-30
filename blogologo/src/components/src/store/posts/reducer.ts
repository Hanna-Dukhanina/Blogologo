import { TmsResponseType } from "../../api/postService";
import { PostsActionType, PostsStateType } from "./types";

const initialValue: PostsStateType = {
  count: 0,
  list: []
}

export const PostsReducer = (state: PostsStateType = initialValue, action: PostsActionType): PostsStateType => {
  switch (action.type) {
    case "LOAD_POSTS":
      return {
        count: (action.payload as TmsResponseType).count,
        list: (action.payload as TmsResponseType).results
      }
    default:
      return state
  }
}