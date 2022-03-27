import React from "react";
import {Carousel} from "react-bootstrap";
import img1 from "../imgs/img1.jpeg";
import img2 from "../imgs/img2.jpg";
import img3 from "../imgs/img3.jpg";

class Slider extends React.Component {
    render() {
        return(
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                    style={{height:'600px'}}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                    style={{height:'600px'}}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                    style={{height:'600px'}}
                    />
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default Slider;