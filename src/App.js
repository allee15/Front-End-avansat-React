import './App.css';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setAnimals} from "./store/slices/animalSlice";
import AnimalProfile from "./components/AnimalProfile";
import { Link } from 'react-router-dom';


function App() {
    // Va ajuta la comunicarea bidirectionala intre App.js si AnimalProfile.js pentru a selecta profilul animalului dorit
    const [selectedAnimal, setSelectedAnimal] = useState(null);
    const token = useSelector(state => state.authentication.token)
    const animals = useSelector(state => state.animals.animals)
    const dispatch = useDispatch();

    useEffect(() => {
        const getData = async () => {
            if(token) {
                const response = await fetch('https://api.petfinder.com/v2/animals', {
                    method: "GET",
                    headers: {
                        "Authorization": "Bearer " + token
                    }
                });
                const result = await response.json();
                dispatch(setAnimals(result.animals))
            }
        }

        getData();
    }, [dispatch, token])
    return (
        <div className="App backgroundImage">
            <nav className="navbar">
                <Link to="/" className="navbar-item">Home</Link>
                <Link to="/contact" className="navbar-item">Contact Us</Link>
                <div className="navbar-right">
                    {token ? (
                        <Link to="/user-profile" className="navbar-item">User Profile</Link>
                    ) : (
                        <Link to="/login" className="navbar-item">Login</Link>
                    )}
                </div>
            </nav>
            <div style={{overflowY: 'auto', height: '100vh'}}>
                {animals.map((animal) => (
                    <AnimalProfile key={animal.id} animal={animal} onHover={(id) => setSelectedAnimal(id)} selected={selectedAnimal === animal.id}/>
                ))}
            </div>
        </div>
    );
}

export default App;
