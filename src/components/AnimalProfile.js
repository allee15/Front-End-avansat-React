import React from 'react';
import './AnimalProfile.css';
import { useNavigate } from 'react-router-dom';


const AnimalProfile = ({ animal }) => {
    const [showDetails, setShowDetails] = React.useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/animal/${animal.id}`);
    }

    return (
        <div className="animalProfile">
            <div className="animalImageContainer">
                <img src={animal.photos[0]?.large ? animal.photos[0]?.large : "https://cdn-icons-png.flaticon.com/512/64/64431.png"}
                     alt={animal.name}
                     className="animalImage" />
            </div>
            <div className="animalInfo">
                <h1 className="animalName">{animal.name}</h1>
                <div className="animalTypeAge">
                    <p className="animalType">Type: {animal.type}</p>
                    <p className="animalAge">Age: {animal.age}</p>
                </div>
                <div className="animalBreedDetails">
                    <p className="animalBreed primaryBreed">{`Primary breed: ${animal.breeds.primary}`}</p>
                    <p className="animalBreed secondaryBreed">{`Secondary breed: ${animal.breeds.secondary ? animal.breeds.secondary : `none` }`}</p>
                </div>
                <div className="animalDetails">
                    <p className="animalColor">{`Fur color: ${animal.colors.primary}`}</p>
                    <button className="detailsButton" onClick={handleClick}>More Details</button>
                </div>
            </div>
        </div>
    );
};

export default AnimalProfile;
