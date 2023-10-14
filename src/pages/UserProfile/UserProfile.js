import React from 'react';
import {useDispatch} from 'react-redux';
import { logout, deleteAccount } from '../../store/slices/authenticationSlice';
import { useNavigate } from 'react-router-dom';
import './UserProfile.css';

const UserProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    }

    const handleDeleteAccount = () => {
        dispatch(deleteAccount());
        navigate('/');
    }

    return (
        <div className="userProfile">
            <p className="message">Hello, pet lover!</p>
            <div className="buttons">
                <button style={{backgroundColor: 'palevioletred', color: 'white'}} type="button" className='btn btn-success' onClick={handleLogout}>Log out</button>
                <button style={{backgroundColor: 'palevioletred', color: 'white'}} type="button" className='btn btn-success' onClick={handleDeleteAccount}>Delete account</button>
            </div>
        </div>
    );
};

export default UserProfile;
