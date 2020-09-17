import React from "react"
import "./style.css"
import axios from "axios"
import Dashboard from "./Dashboard"

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            token: "",
        }
    }

    handleChange = (e) => {
        let value = e.target.value;
        this.setState({
            [e.target.name]: value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const data={
            user_email: this.state.email,
            password: this.state.password,
            org_domain: "ft99lgl2"
        }
        axios.post("https://ft99lgl2.revvsales.com/api/v2/auth/initiate-auth",data, {
            headers: {
                "Content-Type": "application/json",
                "GrantType":"password",
            },        
        }).then((res) => {
            console.log(res)
            this.handleData(res.data);
        }).catch(function (error) {
            console.log(error);
        });
    }

    handleData = (res) => {
        console.log(res)
        this.setState({
            token: res.User.access_token
        });
    };

    render() {
        console.log(this.state)
        if(this.state.token===""){
            return (
                <div>
                    <div className="container">
                        <h1>Form</h1>
                        <div className="login-container">
                            <div className="flex">
                                <div className="flex1">
                                    <div className="username">Email : &nbsp;</div>
                                    <div className="password">Password :</div>
                                </div>
                                <div className="flex1">
                                    <input 
                                        type="email"
                                        name="email"
                                        className="input-username" 
                                        placeholder="Enter email" 
                                        onChange={this.handleChange} 
                                        required
                                    /><br/>
                                    <input 
                                        type="password" 
                                        name="password"
                                        className="input-password" 
                                        placeholder="Enter password" 
                                        onChange={this.handleChange} 
                                        required
                                    />
                                </div>
                            </div>
                            <div style={{marginTop:"4%"}}>
                                <button className="submit" onClick={this.handleSubmit}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return <Dashboard email={this.state.email} token={this.state.token}/>
        }
    }
}