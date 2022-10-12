import axios from 'axios';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/users.scss';
function Users() {
    const [state, setState]=useState([]);
    useEffect(()=>{
        axios('https://jsonplaceholder.typicode.com/users').then(e=>{
            setState(e.data);
        })
    },[]);

    return ( 
        <div className="users">
            {state.map(e=>{
                return(
                    <Link to={'/user/'+e.id}>
                        <img src="https://picsum.photos/300/300" alt="rasm" />
                        <div className="bio">
                            <h1>BIO</h1>
                            <p>Ismi: {e.name}</p>
                            <p>Useri: {e.username}</p>
                        </div>
                        <div className="contact">
                            <h1>CONTACTS</h1>
                            <p>e-mail: {e.email}</p>
                        </div>
                        <button>Kirish</button>
                    </Link>
                )
            })}
        </div>
     );
}

export default Users;