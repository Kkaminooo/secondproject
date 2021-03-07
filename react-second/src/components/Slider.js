import React from 'react';
import Slider from 'infinite-react-carousel';
import img1 from '../images/slider/1.jpg'
import img2 from '../images/slider/2.jpg'
import img3 from '../images/slider/3.jpg'
import img4 from '../images/slider/4.jpg'
import img5 from '../images/slider/5.jpg'




const SimpleSlider = () => (
    <Slider className="slider">
        <div>
            <img src={img1}/>
        </div>
        <div>
            <img src={img2}/>
        </div>
        <div>
            <img src={img3}/>
        </div>
        <div>
            <img src={img4}/>
        </div>
        <div>
            <img src={img5}/>
        </div>

    </Slider>
);


export default SimpleSlider