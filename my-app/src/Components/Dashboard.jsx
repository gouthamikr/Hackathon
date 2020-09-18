import React, { Component } from "react"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"

export default class DashBoard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    render() {
        const { email, token } = this.props
        console.log(email, token)
        return (
            <>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Hey! {email}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <div>You are logged in successfully! <br/>Go to <a href="">Forms</a> to enter Details!</div>
                        {/* <p>{token}</p> */}
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary">Close</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </>
        )
    }
}