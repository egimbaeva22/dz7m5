import createUserReducer from '../features/user/createUserSlice';
import addUserReducer from '../features/user/addUserSlice';
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        createUser: createUserReducer,
        addUser: addUserReducer
    }
});

export default store