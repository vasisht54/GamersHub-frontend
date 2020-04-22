import React from "react";
import {register} from "../../../service/UserService"
import {Link} from "react-router-dom";
import "../../Prototype.css"

export default class Register extends React.Component {

    state = {
        username: '',
        password: '',
        verifyPassword: '',
        match: true
    }
    handleRegister = (user) => {
        if(this.state.password !== this.state.verifyPassword){
            alert('Passwords do not match')
        }
        else if(this.state.username === ''){
            alert('Username cannot be empty')
        }
        else if(this.state.password === ''){
            alert('Password cannot be empty')
        }

        else {
            // alert('user registered')
            register(user)
                .then(user => {
                    localStorage.setItem("profile", JSON.stringify(user))
                    this.props.history.push('/profile')
                } )
        }
    }

    render() {
        return (
            <div>
                <nav>
                    <ul className="topnav" id="dropDown">
                        <li style={{cursor: "pointer"}}>
                            <Link to={`/gamebook`}>
                                <i className="fas fa-home"></i>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="container">
                    <h1>
                        Sign Up
                    </h1>

                    <form>

                        <div className="form-group row">
                            <label htmlFor="username" className="col-sm-2 col-form-label ">
                                Username
                            </label>
                            <div className="col-sm-10">
                                <input value={this.state.username}
                                       onChange={(e) => this.setState({
                                           username: e.target.value
                                       })}
                                       type="text" id="username"
                                       className=" form-control wbdv-field wbdv-username"
                                       placeholder="Username"/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="password" className="col-sm-2 col-form-label ">
                                Password
                            </label>
                            <div className="col-sm-10">
                                <input value={this.state.password}
                                       onChange={(e) => this.setState({
                                           password: e.target.value
                                       })}
                                       type="password" id="password"
                                       className=" form-control wbdv-field wbdv-password"
                                       placeholder="Password"/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="verify-password" className="col-sm-2 col-form-label">
                                Verify Password
                            </label>
                            <div className="col-sm-10">
                                <input type="password" id="verify-password"
                                       onChange={(e) => {
                                           // if(this.state.verifyPassword === this.state.password){
                                           //     this.setState({
                                           //                       match: true
                                           //                   })
                                           // }
                                           // else if(this.state.verifyPassword !== this.state.password){
                                           //     this.setState({
                                           //                       match: false
                                           //                   })
                                           // }
                                           this.setState({
                                               verifyPassword: e.target.value
                                           })

                                       }

                                       }
                                       className=" form-control wbdv-field wbdv-password-verify"
                                       placeholder="Password"
                                       value={this.state.verifyPassword}/>
                            </div>
                            {this.state.match}
                            {this.state.password}
                            {this.state.verifyPassword}
                            { !this.state.match  && <div className="col">
                                <label className="alert alert-success wbdv-message form-control">
                                    Password do not match
                                </label>
                            </div>}
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">
                            </label>
                            <div className="col-sm">
                                <button type="button"
                                        onClick={() => this.handleRegister(this.state)}
                                        className="button form-control btn btn-primary">
                                    Sign Up
                                </button>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">
                            </label>
                            <div className="col-sm">
                                <button type="button"
                                        onClick={() => this.props.history.push('/prototype')}
                                        className="btn btn-danger form-control">
                                    Cancel
                                </button>

                                <div className="row">
                                    <div className="col-sm-6">
                                        <a href="/login"
                                           className="wbdv-link wbdv-login">
                                            Login
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>


        )
    }
}
