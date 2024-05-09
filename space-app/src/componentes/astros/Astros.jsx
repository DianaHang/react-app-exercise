import {useState, useEffect} from "react";
import CircularProgress from "@mui/material/CIrcularProgress";
import Typography from "@mui/material/Typography";
import "./Astros.css";

function Astro (props) {
    return (
        <div className = "card">
            <h2>{props.astro.name}</h2>
            <p>{props.astro.craft}</p>
        </div>
    );
}


function Astros () {
    const [astros, setAstros] = useState(); //Librería de la api (react)
    //Use effect: Para efectos secundarios, renderiza peticiones de cosas externas dentro del componente.
    const URL= "http://api.open-notify.org/astros.json";

    useEffect(() => {
        async function fetchData() {
        const response = await fetch(URL); //await fetch es una promesa 
        const data = await response.json();
        setAstros(data.people); //.people: Para que el arreglo se muestre sin el undefined en consola, el estado no ocupa esa info, sólo el atributo people.
        }
        fetchData(); //Ejecución de fetchData.
    }, [] /*Llave para poder acceder sin limitaciones a la api de la nasa y no tener problemas al ejecutar el código. */
);
console.log(astros);

    return (
        <> {/* Fragmento para indicar que no cambie todo el display */}
        <Typography variant = "h2"> ASTROS </Typography>
        <div className = "card-container">
           {astros ? (
              astros.map((astro, index) => <Astro astro = {astro} key= {index} />)
            ) : (
                <CircularProgress />
            )}
        </div>
        </>
    );
}

export default Astros; 