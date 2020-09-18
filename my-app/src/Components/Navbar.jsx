import React from "react";
import styled from "styled-components";
import App from "./app"

const NavbarWrapper = styled.div`
    box-shadow: 1px 1px 2px 2px rgba(68, 68, 68, 0.6);
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
        const {handleToggle}=this.props
    return (
        <>
            <NavbarWrapper>
                <Logo src="/logo.jpg"></Logo>
                <ButtonWrappers>
                    <a href="/"
                        style={{
                            borderRadius: "5px",
                            padding: "4px 6px",
                            marginRight: "10px",
                            fontSize: "20px"
                        }}
                    >Home</a>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSd9DuI45dKkAaW4W59dRrytfN-o17StOW-uiK1TTEvEaISNFw/viewform?usp=sf_link"
                        style={{
                            borderRadius: "5px",
                            padding: "4px 6px",
                            fontSize: "20px",
                            marginRight: "10px",
                        }}
                    >Forms</a>
                    <button
                        style={{
                            borderRadius: "5px",
                            padding: "4px 10px",
                            marginRight: "19px",
                            border:"none",
                            color:"white",
                            background: "blue",
                        }}
                        onClick={handleToggle}
                    >
                        Login
                    </button>
                    <button
                        style={{
                            borderRadius: "5px",
                            padding: "4px 10px",
                            marginRight: "19px",
                            border:"none",
                            color:"white",
                            background: "blue",
                        }}
                    >
                        Register
                    </button>
                </ButtonWrappers>
                <App/>
            </NavbarWrapper>
        </>
        );
    }
}

export default Navbar;