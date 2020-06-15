import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

export default class Login extends Component {

    constructor(props){
        super(props);
        const token = localStorage.getItem("token")

        let loggedIn = true
        if(token == null){
            loggedIn = false
        }
        this.state = {
            username: '',
            password: '',
            loggedIn
            }
            this.onChange = this.onChange.bind(this)
            this.submitForm = this.submitForm.bind(this)
        }

        onChange(e){
            this.setState({
                [e.target.name]: e.target.value
            })
        }

        submitForm(e){
            e.preventDefault();
            const {username, password} = this.state;
            if(username === "A" && password === "B"){
                localStorage.setItem("token", "asdfaskdfalksjdfj")
                this.setState({
                    loggedIn: true
                })
            }

        }

    render() {
        if(this.state.loggedIn === true){
            return <Redirect to="/dashboard"></Redirect>
        }
        return (
            <div  style={{margin: 'auto',
                width: '100%',
                textAlign: 'center'}}>
                <h1>Login</h1>
                <h6>Enter "A" as Username</h6>
                <h6>Enter "B" as Password</h6>

                <form onSubmit={this.submitForm}>
                    <input type='text' placeholder="Username" name="username" value={this.state.username} onChange={this.onChange}></input><br/>
                    <input type='password' placeholder="Password" name="password" value={this.state.password} onChange={this.onChange}></input><br/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}
