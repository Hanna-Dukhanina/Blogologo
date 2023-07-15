import FPBtn from "."
import React from "react"

const FPButton = () => {
    const handleClick = () => {
        alert('Ну что поделать)))0)0')
    }
    return (
        <FPBtn text='Forgot password?' onClick={handleClick} />
    )
}

export default FPButton