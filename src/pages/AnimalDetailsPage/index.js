import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import AnimalDetails from "../../components/AnimalDetails";

function AnimalDetailsPage() {
    const token = useSelector(state => state.authentication.token);
    const [animalDetails, setAnimalDetails] = useState(null)
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getData = async () => {
            if(token) {
                console.log(token)
                const response = await fetch(`https://api.petfinder.com/v2/animals/${params.id}`, {
                    method: "GET",
                    headers: {
                        "Authorization": "Bearer " + token
                    }
                });
                const result = await response.json();
                setAnimalDetails(result.animal)
            } else {
                navigate("/login")
            }
        }

        getData();
    }, [token, params.id, navigate])

    return (
        <div className="backgroundImage">
            {animalDetails ? (
                <AnimalDetails animal={animalDetails} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default AnimalDetailsPage;