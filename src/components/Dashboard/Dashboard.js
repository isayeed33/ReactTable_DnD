import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom';

export default class Dashboard extends Component {

    constructor(props){
        super(props)
        const token = localStorage.getItem("token")

        let loggedIn = true
        if(token == null){
            loggedIn = false
        }

        this.state = {
            loggedIn
        }
    }
    render() {
        if(this.state.loggedIn === false){
            return <Redirect to="/"></Redirect>
        }
        
            return(
            <div>
                <h1>This is the Dashboard Page!</h1>
                <Link to = "/assignment">Big App Assignment</Link><br/><br/>
                <Link to = "/logout">Log Out</Link>
            </div>
        )
    }
}
