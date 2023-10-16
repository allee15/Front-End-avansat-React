import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { logout, deleteAccount } from '../../store/slices/authenticationSlice';
import { useNavigate } from 'react-router-dom';
import './UserProfile.css';
import ReusableButton from "../../components/reusablaComponents/ReusableButton";

const UserProfile = () => {
    const token = useSelector(state => state.authentication.token);
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

    useEffect(() => {
      if(!token) {
          navigate("/login")
      }
    })

    return (
        <div className="userProfile">
            <p className="message">Hello, pet lover!</p>
            <div className="buttons">
                <ReusableButton size="lg" variant="pink" type="button" onClick={handleLogout}>Log out</ReusableButton>
                <ReusableButton size="lg" variant="pink" type="button" onClick={handleDeleteAccount}>Delete account</ReusableButton>
            </div>
        </div>
    );
};

export default UserProfile;
