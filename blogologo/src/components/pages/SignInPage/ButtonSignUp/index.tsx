import React from "react"
import { Link } from "react-router-dom"
import style from './style.module.scss'

const SignUpButton = () => {
    return (
        <Link to='/pageSignUp' className={style['signUp']}>Sign Up</Link>
    )
}

export default SignUpButton
