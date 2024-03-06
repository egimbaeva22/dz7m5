import React from 'react';
import {Route, Routes} from "react-router-dom-v5-compat";
import CreateCards from "./CreateCards";
import Cards from "./Cards";

const Pages = () => {
    return (
        <Routes>
            <Route path={'/'} element={<CreateCards/>}/>
            <Route path={'/cards'} element={<Cards/>}/>
            <Route path={'/createCards'} element={<CreateCards/>}/>
        </Routes>
    );
};

export default Pages;