import React, { Component } from "react"

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
                <div>
                    <h4>Email : {email}</h4>
                    <h4>token : {token}</h4>
                </div>
            </>
        )
    }
}