import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";
import Login from './Login'

const CarouselWrapper = styled.div`
    position : relative;
    margin-top:0.5%;
    img {
        border-radius: 15px;
        height: 70vh;
        margin: 20px auto;
    }
`;

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div
                style={{
                    height: "92vh",
                }}
            >
                { !this.props.show ?
                    <CarouselWrapper>
                        <h1 style={{ fontFamily: "cursive", textAlign: "center" }}>Welcome to i-plus-plus car sale </h1>
                        <Carousel interval={4000}>
                            <Carousel.Item>
                                <img
                                    className="d-block w-75"
                                    src="/carousal pic 1.jpg"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>Benz</h3>
                                    <p>Wanna explore latest models</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-75"
                                    src="/carousal pic 2.jpg"
                                    alt="second slide"
                                />
                                <Carousel.Caption>
                                    <h3>Verna </h3>
                                    <p>Wanna explore latest models</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-75"
                                    src="/carousal pic 3.jpg"
                                    alt="Third slide"
                                />
                                <Carousel.Caption className="text-dark">
                                    <h3>Audi</h3>
                                    <p>Wanna explore latest models</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </CarouselWrapper> :
                    <Login />}
            </div>
        );
    }
}

export default HomePage;