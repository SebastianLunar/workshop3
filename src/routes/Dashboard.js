import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Chat from '../Chat/Chat'
import { CreateProduct } from '../Components/CreateProduct';
import Perfil from '../Components/Perfil';
import { Home } from '../container/Home';

const Dashboard = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/create" element={<CreateProduct />} />
            <Route path='/chat' element={<Chat />} />
            <Route path='/perfil' element={<Perfil/>} />
        </Routes>
    );
};

export default Dashboard;