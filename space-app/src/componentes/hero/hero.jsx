import "./hero.css";

function Hero () {
    return (
        <>
          <typography variant ="h1" gutterBottom>
            Welcome
          </typography>
          
          <div className= "hero-container">
            <div className= "hero-card">
                <img className= "hero-img" alt= "Perrito feo" src="./assets/Jack.jpg/"/>
                <div className= "hero-info">
                   <h2 className= "hero-name"> JACK </h2>
                   <p className="hero-contact"> pinto_duncan04@gmail.com </p>
                   <p className= "hero-contact"> +52 55 1378 2912 </p>
                   <p className="hero-description" > Soy un perrito muy querido por mi familia; mi actividad favorita es ir al parque a jugar y comer todo lo que encuentre. A veces molesto a mis primos gatitos, pero me porto bien. </p>
                </div>
            </div>
          </div>


        </>
    );
}

export default Hero;