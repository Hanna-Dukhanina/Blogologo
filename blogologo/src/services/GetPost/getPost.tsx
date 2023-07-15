import { PinProps } from "../../components/pages/BlogPage/type"

export const getPost = (id: string) => {
    return fetch('https://mockside.vercel.app/api/posts/' + id)
        .then(response => response.json())
        .then((result: PinProps) => result)
}