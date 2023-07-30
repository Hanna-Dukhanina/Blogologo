export type PostType = {
  id: string
  title: string
  image: string
  // likes
}

export type TmsResponseType = {
  count: number
  results: PostType[]
}

export const getPosts = async (limit: number, offset: number) => {
  const url = `https://studapi.teachmeskills.by/blog/posts/?limit=${limit}&offset=${offset}`
  try {
    const response = await fetch(url)
    const result = await response.json()

    // {
    //     "count": 400,
    //     "results": [
    //     {
    //     "id": 6,
    //     "image": "https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-10-07_%D0%B2_10.12.21.png",
    //     "text": "Hello",
    //     "date": "2021-10-07",
    //     "lesson_num": 44,
    //     "title": "b-52",
    //     "description": "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
    //     "author": 99
    //     }
    // ] }

    return {
      ok: response.ok,
      status: response.status,
      data: result
    }
  } catch (error: any) {
    return {
      ok: false,
      status: 400,
      data: error.message
    }
  }
}

export const getSearchPosts = async (search: string, limit: number, offset: number) => {
  const url = `https://studapi.teachmeskills.by/blog/posts/?search=${search}&limit=${limit}&offset=${offset}`
  try {
    const response = await fetch(url)
    const result = await response.json()

    return {
      ok: response.ok,
      status: response.status,
      data: result
    }
  } catch (error: any) {
    return {
      ok: false,
      status: 400,
      data: error.message
    }
  }
}

