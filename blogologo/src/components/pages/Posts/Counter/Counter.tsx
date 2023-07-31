import React from 'react'
import { useReducer } from 'react'

type StateType = {
    count: number
}
type ActionType = {
    type: string
}

const defaultState: StateType = {
    count: 0
}

const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case 'добавь 1':
            return {
                count: state.count + 1
            }
        case 'отними 1':
            return {
                count: state.count - 1
            }

        default:
            return state
    }
}

export const Counter2 = () => {
    const [state, dispatch] = useReducer(reducer, defaultState)

    const decrease = () => dispatch({ type: 'отними 1' })
    const increase = () => dispatch({ type: 'добавь 1' })

    return (
        <div style={{ display: 'flex' }}>
            <button onClick={decrease}>-</button>

            <div>Counter 2(useDispatch): {state.count} </div>

            <button onClick={increase}>+</button>
        </div>
    )
}