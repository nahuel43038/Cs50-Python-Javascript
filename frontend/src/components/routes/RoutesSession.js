import React, {useContext} from 'react';
import Register from './../session/Register';
import Login from './../session/Login';
import Home from './../home/Home';
import AuthContext from "../contexts/AuthContext";
import Invitation from '../group/Invitation';


import { 
    BrowserRouter as Router, 
    Routes, 
    Route, 
    Navigate} from "react-router-dom";

const RoutesSession = () => {

    let {user} = useContext(AuthContext);

    return (
    <Router>
            <Routes>
                <Route exact path="/" element={!user ?<Navigate to="/login"/> : <Home />} />
                <Route exact path="/register" element={!user ?<Register/> : <Navigate to="/"/>} />
                <Route exact path="/login" element={user ? <Navigate to="/"/> : <Login />}/>
                <Route exact path="/group-invitation" element={!user ? <Navigate to="/login"/> : <Invitation />} />
            </Routes>
    </Router>)

}

export default RoutesSession;