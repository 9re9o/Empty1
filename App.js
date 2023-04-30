//https://api.github.com/users/9re9o  -> devuelve Json
import "./style.css";


export default function App() {
    return(
        <div className="container">
            <h1>Buscador de usuarios</h1>

            <div>
                <div>
                    <input placeholder="Digita el nombre de usuario "></input>
                </div>
                <div>
                    <button>Buscar</button>
                </div>
            </div>
            <article>
                <div className = "container">
                    <img src = "" alt = "avatar"></img>
                    <h4>Usuario</h4>
                </div>
            </article>
        </div>
    );
}