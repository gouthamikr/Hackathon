import React from "react"
import "./style.css"
import axios from "axios"
import Form from "react-bootstrap/Form"
import Dashboard from "./Dashboard"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"

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
        const data = {
            user_email: this.state.email,
            password: this.state.password,
            org_domain: "ft99lgl2"
        }
        axios.post("https://ft99lgl2.revvsales.com/api/v2/auth/initiate-auth", data, {
            headers: {
                "Content-Type": "application/json",
                "GrantType": "password",
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
        if (this.state.token === "") {
            return (
                <div>
                <h1 style={{marginTop:"2%"}}>Here's Login Form!</h1>
                <p><i>(It's absolutely Free)</i></p>
                <Container style={{marginLeft:"40%"}}>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Check
                                type="email" 
                                placeholder="Enter email"
                                name="email"
                                onChange={this.handleChange}
                                required 
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Check 
                                type="password"
                                placeholder="Password" 
                                name="password"
                                onChange={this.handleChange} 
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Button variant="primary" onClick={this.handleSubmit} type="submit">
                            Submit
                        </Button>
                    </Form>
                   </Container>
                </div>

            )
        }
        else {
            return <Dashboard email={this.state.email} token={this.state.token} />
        }
    }
}