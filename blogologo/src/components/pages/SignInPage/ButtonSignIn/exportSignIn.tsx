import React from "react"
import SignInBtn from "."


const SignInButton = () => {
    const handleClick = () => {
        alert('вы кликнули на меня!')
    }
    return (
        <SignInBtn text='Sign In' onClick={handleClick} />
    )
}

export default SignInButton