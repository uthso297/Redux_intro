import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

export interface Itask {
    id: string,
    title: string,
    description: string,
    dueDate: string,
    isCompleted: boolean,
    priority: "high" | "medium" | "low"
}

interface IinitialState {
    task: Itask[]
}

const savedTasks = localStorage.getItem("item");
const initialState: IinitialState = {
    task: savedTasks ? JSON.parse(savedTasks) : []
};

// generate object id by js coding or install uuid package
// function generateObjectId() {
//     const timestamp = Math.floor(Date.now() / 1000).toString(16);
//     const random = 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, () =>
//         Math.floor(Math.random() * 16).toString(16)
//     );
//     return timestamp + random;
// }

type DraftTask = Pick<Itask, "title" | "description" | "dueDate" | "priority">

const creteTask = (taskData: DraftTask): Itask => {
    return { id: nanoid(), isCompleted: false, ...taskData }
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<DraftTask>) => {
            // const id = generateObjectId();
            // const taskData = {
            //     ...action.payload,
            //     id,
            //     isCompleted: false
            // }
            // action.payload.id = id
            // action.payload.isCompleted = false;
            // state.task.push(action.payload)
            const taskData = creteTask(action.payload)
            state.task.push(taskData)
            localStorage.setItem("item", JSON.stringify(state.task));
        },
        toogleCompleteState: (state, action: PayloadAction<string>) => {
            console.log(action);
            state.task.forEach((task) =>
                task.id === action.payload ? (task.isCompleted = !task.isCompleted) : task
            )
            localStorage.setItem("item", JSON.stringify(state.task));
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.task = state.task.filter((task) => task.id !== action.payload)
            localStorage.setItem("item", JSON.stringify(state.task));

        }
    }
})

export const { addTask, toogleCompleteState, deleteTask } = taskSlice.actions
export default taskSlice.reducer