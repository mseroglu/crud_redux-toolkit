import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid"


const crudSlice = createSlice({
    name: "crud",
    initialState: {
        tasks: [
            {
                "title": "g",
                "author": "g",
                "assigned_to": "g",
                "end_date": "2024-06-09",
                "id": "bfc03f84-3367-4589-9d31-b9e240fd24c6"
            },
            {
                "title": "n",
                "author": "n",
                "assigned_to": "n",
                "end_date": "2024-06-14",
                "id": "0b04cb87-bcb7-47e3-846d-9a834de52ad6"
            },
            {
                "title": "k",
                "author": "k",
                "assigned_to": "k",
                "end_date": "2024-06-07",
                "id": "d356b4a5-2363-4934-ab0e-074f3e709624"
            },
            {
                "title": "mm",
                "author": "mm",
                "assigned_to": "mm",
                "end_date": "2024-06-16",
                "id": "fa19ce22-f013-45e5-90b0-6a59885f19ac"
            }
        ]
    },
    reducers: {
        addTask: (state = initialState, action) => {
            action.payload.id = v4()
            state.tasks.push(action.payload)
        },
        delTask: (state, { payload }) => {
            // const filtrered=state.tasks.filter((item)=> item.id !== payload)
            // state.tasks = filtrered
            const i = state.tasks.findIndex((i) => i.id === payload)
            state.tasks.splice(i, 1)
        },
        editTask: (state, { payload }) => {

            const i = state.tasks.findIndex((i) => i.id === payload.id)
            state.tasks.splice(i, 1, payload)
        },

    }
})
export default crudSlice.reducer

export const { addTask, delTask, editTask } = crudSlice.actions