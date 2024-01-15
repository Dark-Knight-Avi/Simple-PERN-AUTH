import React, { createContext, useReducer } from "react";
import StateReducer from "../reducer/StateReducer";
import { initialState } from "./initialState";


export const StateContext = createContext(initialState)

export const StateContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(StateReducer, initialState)

    const handleAddTask = (task) => {
        dispatch({
            type: "ADD_TASK",
            payload: {
                task: task
            }
        })
    }
    const handleRemoveTask = (taskId) => {
        dispatch({
            type: "REMOVE_TASK",
            payload: {
                id: taskId
            }
        })
    }
    const handleEditTask = (task) => {
        dispatch({
            type: "EDIT_TASK",
            payload: {
                task: task
            }
        })
    }
    const handleCompleteTask = (taskId) => {
        dispatch({
            type: "COMPLETE_TASK",
            payload: {
                id: taskId
            }
        })
    }
    const handleReopenTask = (taskId) => {
        dispatch({
            type: "REOPEN_TASK",
            payload: {
                id: taskId
            }
        })
    }

    return (
        <StateContext.Provider value={{ state, handleAddTask, handleRemoveTask, handleEditTask, handleCompleteTask, handleReopenTask }}>
            {children}
        </StateContext.Provider>
    )
}
