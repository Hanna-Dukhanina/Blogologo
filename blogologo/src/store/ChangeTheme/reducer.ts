import { ActionType, StateType } from "./types";

const initialValue: StateType = {
    theme: 'light'
}
export const reducer = (state: StateType = initialValue, action: ActionType) => {
    switch (action.type) {
        case 'SET_LIGHT_THEME':
            return {
                theme: 'light'
            }
        case 'SET_DARK_THEME':
            return {
                theme: 'dark'
            }
        default:
            return state
    }
}