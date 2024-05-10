import "./Navbar.css";
import RocketIcon from "@mui/icons-material/Rocket";
import { Link } from "react-router-dom";

function Navbar(props) {
    /** const iconStyles = {
    paddingX: "5px",
    color: "green",
   };*/
//Links nos muestra el array pero props nos muestra el objeto dentro.
    const links = props.links;

    return (
        <nav className = "navbar">
            <div>
                <RocketIcon/>
                <h2>Hang Ink</h2>
                <h2>{props.header}</h2>
                {/*<h2 style={{backgroundColor: "purple"}}>space-app</h2>*/}
            </div>
            <div>
                {links.map((link) => (
                    <Link className= "link" to = {link.link} key= {link.id}>
                        {link.text}
                    </Link>
                    ))}
            </div>
            <div>
                <button>
                    <p>icon</p>
                </button>
                <button>
                    <p>icon</p>
                </button>
                <button>
                    <p>icon</p>
                </button>
            </div>
        </nav>
    );

}


export default Navbar;