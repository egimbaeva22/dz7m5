import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users: []
}
export const addUsersSlice = createSlice({
    name: 'addUser',
    initialState,
    reducers:{
        addUser: (state, action) => {
            state.users.push(action.payload);
        }
    }
})

export const {addUser} = addUsersSlice.actions
export default addUsersSlice.reducer