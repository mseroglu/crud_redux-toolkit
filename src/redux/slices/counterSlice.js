import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 100,
        isDarkTheme: true
    },
    reducers: {
        arttir: state => { state.count++ },
        azalt: state => { state.count-- },
        sifirla: (state, action) => { state.count = action.payload },
        temaDegis: state => { state.isDarkTheme = !state.isDarkTheme }

    }
})
export default counterSlice.reducer

export const { azalt, arttir, sifirla, temaDegis } = counterSlice.actions