import { createSlice } from "@reduxjs/toolkit";

export interface Itask {
    id: string,
    title: string,
    description: string,
    dueDate: string,
    isCompleted: boolean,
    priority: "High" | "Medium" | "Low"
}

interface IinitialState {
    task: Itask[]
}

const initialState: IinitialState = {
    task:
        [
            {
                id: '232-232-232',
                title: 'initialized frontend',
                description: 'create homepage and routing',
                dueDate: '2025-11',
                isCompleted: false,
                priority: 'High'
            }
        ]
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {}
})

export default taskSlice.reducer