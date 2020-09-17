import React from "react";
import styled from "styled-components";
import Login from "./Login";
import Home from "./Home";

const NavbarWrapper = styled.div`
    box-shadow: 3px 3px 2px 2px rgba(68, 68, 68, 0.6);
    width: 100%;
    height: 70px;
    border-radius:5px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Logo = styled.img`
    height: 50px;
    margin: 6px 10px;
    border-radius:20px;
`;
const ButtonWrappers = styled.div`
    margin-left: auto;
    margin-right: 40px;
`;

class Navbar extends React.Component {
    constructor(props){
        super(props)
        this.state={
            toggle:false
        }
    }
    render(){
    return (
        <>
            <NavbarWrapper>
                <Logo src="/logo.jpg"></Logo>
                <ButtonWrappers>
                    <a href=""
                        style={{
                            borderRadius: "5px",
                            padding: "4px 6px",
                            marginRight: "10px",
                            // color: "white",
                            fontSize: "20px"
                        }}
                    >About</a>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSd9DuI45dKkAaW4W59dRrytfN-o17StOW-uiK1TTEvEaISNFw/viewform?usp=sf_link"
                        style={{
                            borderRadius: "5px",
                            padding: "4px 6px",
                            // color: "white",
                            fontSize: "20px",
                            marginRight: "10px",
                        }}
                    >Forms</a>
                    <button
                        style={{
                            borderRadius: "5px",
                            padding: "4px 6px",
                            marginRight: "19px",
                            background: "white",
                        }}
                        onClick={()=>this.setState({toggle:!this.state.toggle})}
                    >
                        Login
                    </button>
                    <button
                        style={{
                            borderRadius: "5px",
                            padding: "4px 6px",
                            marginRight: "10px",
                            background: "white",
                        }}
                    >
                        Register
                    </button>
                </ButtonWrappers>
            </NavbarWrapper>

            <Home disp={this.state.toggle} />
            {/*<Login /> */}
        </>
        );
    }
}

export default Navbar;