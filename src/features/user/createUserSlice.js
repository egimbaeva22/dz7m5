import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    name: '',
    birthDate: [],
    gender: ''
}

export const userCreateSlice = createSlice({
    name: 'createUser',
    initialState,
    reducers:{
        setFirstName:(state, action) => {
            state.name = action.payload
        },
        setBirthDate: (state,action) => {
            state.birthDate = action.payload
        },
        setGender: (state,action) => {
            state.gender = action.payload
        }
    }
})
export const {setFirstName,setBirthDate,setGender} = userCreateSlice.actions
export default userCreateSlice.reducer