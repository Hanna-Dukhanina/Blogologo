// export type PostType = {
//     id: string
//     title: string
//     image: string
// }

import { PinProps } from "../components/pages/BlogPage/type";

type MocksideResponseType = {
    count: number;
    items: PinProps[]
}

export const getPosts = async (): Promise<PinProps[]> => {
    const response = await fetch('https://mockside.vercel.app/api/posts')
    const result: MocksideResponseType = await response.json()
    return result.items;
};

export const getPost = (id: string): Promise<PinProps> => {
    return fetch('https://mockside.vercel.app/api/posts/' + id)
        .then(response => response.json())
        .then((result: PinProps) => result)
}