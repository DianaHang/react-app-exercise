import { Pets } from '@mui/icons-material';
import "./About.css";

function About () {
    return (
        <>
          <div className= "about-container">
            <div className= "about-card">
                <img src="./recursos/Jack.jpg/" className= "about-img" alt= "Perrito feo" />
                <div className= "about-info">
                   <h2 className= "about-name"> JACK </h2>
                   <Pets/>
                   <p className="about-contact"> pinto_duncan04@gmail.com </p>
                   <p className= "about-contact"> +52 55 1378 2912 </p>
                   <p className="about-description" > Soy un perrito muy querido por mi familia; mi actividad favorita es ir al parque a jugar y comer todo lo que encuentre. A veces molesto a mis primos gatitos, pero me porto bien. </p>
                </div>
            </div>
          </div>


        </>
    );
}

export default About;