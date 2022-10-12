import axios from 'axios';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/card.scss';
function Card(props) {
    const [state, setState]=useState({});
    useEffect(()=>{
        axios('https://jsonplaceholder.typicode.com/users/'+props.match.params.id).then(e=>{
            setState(e.data);
        })
    },[]);
    return ( 
        <div className="card">
            <Link to='/'>Ortga</Link>
            <div className="container">
                <img src="https://picsum.photos/500/400" alt="a" />
                <div className="name">
                    <h1>{state.name}</h1>
                    <p>Username: {state.username} | e-mail: {state.email}</p>
                    <p>Phone: {state.phone}</p>
                    <p>Web-site: https://{state.website}</p>
                </div>
            </div>
        </div>
     );
}

export default Card;