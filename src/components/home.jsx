import React from "react";
import "../App.css"


const Home = () => {
    return (
        <div className="lCard container-fluid">
            <div className="landingText">
                <p className="amaticBrand">Evan Young</p>
                <p className="jobTitle">Software Engineer</p>
            </div>
            <div className="landingImageContainer">
                <img src="https://lh3.googleusercontent.com/RxWk4ozZYMmmxNGC3EKjRAOHO74BvOEC2EYH60ERtNq33ncqRgwIM2SUdy1YTgsBG5heYgzHYBV7wOIB69WlXpx7QA9XZORNUGJlKm7mXz_ev-xSut8x8TZ7pRBaVyqIO80XwYZEmw=w2400" className="landingImage" alt="Mountain backdrop" />
            </div>
        </div>

    )
}

export default Home;