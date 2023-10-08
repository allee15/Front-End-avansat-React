import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setAnimals} from "../../store/slices/animalSlice";
import {useParams} from "react-router-dom";

function AnimalDetailsPage() {
    const token = useSelector(state => state.authentication.token)
    const [animalDetails, setAnimalDetails] = useState(null)
    const params = useParams();

    console.log(params)

    useEffect(() => {
        const getData = async () => {
            if(token) {
                const response = await fetch(`https://api.petfinder.com/v2/animals/${params.id}`, {
                    method: "GET",
                    headers: {
                        "Authorization": "Bearer " + token
                    }
                });
                const result = await response.json();
                setAnimalDetails(result.animal)
            }
        }

        getData();
    }, [token])
    return (
        <div>
            {animalDetails && JSON.stringify(animalDetails)}
        </div>
    )
}

export default AnimalDetailsPage;