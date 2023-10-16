import React from 'react';
import './AnimalProfile.css';
import { useNavigate } from 'react-router-dom';
import {useSelector} from "react-redux";
import ReusableButton from "./reusablaComponents/ReusableButton";


const AnimalProfile = ({ animal }) => {
    const navigate = useNavigate();
    const token = useSelector(state => state.authentication.token);

    const handleClick = () => {
        if (token) {
            navigate(`/animal/${animal.id}`);
        } else {
            navigate('/login');
        }
    }

    return (
        <div className="animalProfile">
            <div className="animalImageContainer">
                <img src={animal.photos[0]?.large ? animal.photos[0]?.large : "https://cdn-icons-png.flaticon.com/512/64/64431.png"}
                     alt={animal.name}
                     className="animalImage" />
            </div>
            <div className="leftAlign" >
                <h1>{animal.name}</h1>
                <p>Type: {animal.type}</p>
                <p>Age: {animal.age}</p>
                <p>{`Primary breed: ${animal.breeds.primary}`}</p>
                <p>{`Secondary breed: ${animal.breeds.secondary ? animal.breeds.secondary : `none` }`}</p>
                <p>{`Fur color: ${animal.colors.primary}`}</p>
                <ReusableButton size="sm" variant="green" type="submit" onClick={handleClick}>More Details</ReusableButton>
            </div>
        </div>
    );
};

export default AnimalProfile;
