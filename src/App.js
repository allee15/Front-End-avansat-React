import './App.css';
import {useEffect, useState} from "react";
import Counter from "./components/Counter";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setAnimals} from "./store/slices/animalSlice";

function App() {
    const [counter, setCounter] = useState(0);
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
    <div className="App">
        <Counter counter={counter} setCounter={setCounter} />
        <Counter counter={counter} setCounter={setCounter} />
        <Link to="/login">Go to login page</Link>
        <iframe src="https://www.youtube.com/embed/xaXbs1fRFRM\"></iframe>
        {animals.map(animal => <Link to={`/animal/${animal.id}`}>{animal.name}</Link>)}
    </div>
  );
}

export default App;
