import React from 'react'
import Productbox from './Productbox'
import pimage1 from "../images/s1.png";
import pimage2 from "../images/s2.png";

export default function Products() {
    return (
        <div id="products">
            <h1>CHOOSE & ENJOY</h1>
            <p>Lorem ipsum dolor sit amet consecteur adipisicing elit. Facilis maxime veniam voluptate, quis nostrum aliquid!</p>
            <div className="a-container">
                <Productbox image={pimage1} title="Luger Burger"></Productbox>
                <Productbox image={pimage2} title="Le Pigeon Burger"></Productbox>
                <Productbox image={pimage1} title="Luger Burger"></Productbox>
                <Productbox image={pimage2} title="Le Pigeon Burger"></Productbox>
            </div>
        </div>
    )
}
