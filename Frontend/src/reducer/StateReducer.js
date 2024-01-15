import { initialState } from "../context/initialState"

const StateReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                createdTasks: [
                    ...state.createdTasks,
                    action.payload.task
                ]
            }
        case 'REMOVE_TASK':
            return {
                ...state,
                createdTasks: state.createdTasks.filter((item) => item.id !== action.payload.id)
            }
        case 'EDIT_TASK':
            return {
                ...state,
                createdTasks: state.createdTasks.map(item => {
                    if (item.id === action.payload.task.id) {
                        return {
                            ...action.payload.task
                        }
                    } else {
                        return item
                    }
                })
            }
        case 'COMPLETE_TASK':
            return {
                ...state,
                createdTasks: state.createdTasks.map((item) => {
                    if (item.id === action.payload.id) {
                        return { ...item, isCompleted: true }
                    } else {
                        return item
                    }
                })
            }
        case 'REOPEN_TASK':
            return {
                ...state,
                createdTasks: state.createdTasks.map((item) => {
                    if (item.id === action.payload.id) {
                        return { ...item, isCompleted: false }
                    } else {
                        return item
                    }
                })
            }

        case 'USER_LOGIN':
            return {
                userCode: action.payload.userCode,
                isUserLoggedIn: true,
                createdTasks: action.payload.createdTasks
            }
        case 'USER_LOGOUT':
            return initialState
        default:
            return state
    }
}

export default StateReducer