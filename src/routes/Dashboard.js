import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Chat from '../Chat/Chat'
import Perfil from '../Components/Perfil';

const Dashboard = () => {
    return (
        <Routes>
            <Route path='/chat' element={<Chat />} />
            <Route path='/perfil' element={<Perfil/>} />
        </Routes>
    );
};

export default Dashboard;