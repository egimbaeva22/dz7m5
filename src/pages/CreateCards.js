import React from 'react';
import Navbar from "../components/Navbar";
import {useDispatch, useSelector} from "react-redux";
import createUserSlice, {setFirstName,setBirthDate, setGender} from "../features/user/createUserSlice";
import addUserSlice, {addUser} from "../features/user/addUserSlice";
import './cards.css'

const CreateCards = () => {
    const user = useSelector((state) => state.createUser)
    const dispatch = useDispatch()
    const handleDateChange =(e) => {
        const selectData = e.target.value
        dispatch(setBirthDate(selectData))
    }
    const handleGenderChange =(e) => {
        const selectData = e.target.value
        dispatch(setGender(selectData))
    }

    const add =(e) => {
        e.preventDefault()
        dispatch(addUser(user))
    }
    return (
        <div className='snow-blocks'>
                <div className="snow1"></div>
                <div className="snow2"></div>
            <Navbar/>
            <form className='form-title'>
                <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                    <label>
                        Имя:
                        <input type="text"  onChange={(e) => dispatch(setFirstName(e.target.value))}/>
                    </label>
                    <label >
                        Дата рождения:
                        <input type="date"  onChange={handleDateChange}/>
                    </label>
                    <label>
                        Выберите пол:
                        <select onChange={handleGenderChange}>
                            <option>Выберите...</option>
                            <option>Мужской</option>
                            <option>Женский</option>
                        </select>
                    </label>
                </div>
                <button onClick={(e) => add(e)}>Submit</button>
            </form>
            <div className='result'>
                <h2>Имя:{user.name}</h2>
                <h2>Дата рождения:{user.birthDate}</h2>
                <strong>Пол:{user.gender}</strong>
            </div>
        </div>
    );
};

export default CreateCards;