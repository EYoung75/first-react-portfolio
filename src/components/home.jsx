import React from "react";
import "../App.css"


class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="lCard"></div>
                <h1 className="amaticBrand">Evan Young</h1>
                <h2 className="jobTitle">Software Engineer</h2>
                <img src="https://lh3.googleusercontent.com/RxWk4ozZYMmmxNGC3EKjRAOHO74BvOEC2EYH60ERtNq33ncqRgwIM2SUdy1YTgsBG5heYgzHYBV7wOIB69WlXpx7QA9XZORNUGJlKm7mXz_ev-xSut8x8TZ7pRBaVyqIO80XwYZEmw=w2400" id="meImage" />

            </div>
        )
    }
}

export default Home;