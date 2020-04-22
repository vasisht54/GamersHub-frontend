import React from "react";
import {login} from "../../../service/UserService";
import {findUserById} from "../../../service/UsersService";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import "../../Prototype.css"

export class Login extends React.Component {

    constructor(props) {

        super(props);
    }

    state = {

        username: '',
        password: ''

    }

    handleLogin = (user) =>
        login(user)
            .then(newUser => {
                      // console.log(JSON.stringify(newUser))
                      findUserById(newUser.id)
                          .then(currentUser =>
                                                {

                                          localStorage.setItem("profile", JSON.stringify(currentUser))
                                          this.props.history.push('/profile')
                                      })
                  }
            )

    render() {
        return (
            <div>
                <nav>
                    <ul className="topnav" id="dropDown">
                        <li style={{cursor: "pointer"}}>
                            <Link to={`/search`}>
                                <i className="fas fa-home"></i>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="container">
                    <h1>Sign In</h1>

                    <form>

                        <div className="form-group row">
                            <label htmlFor="username" className="col-sm-2 col-form-label">
                                Username
                            </label>
                            <div className="col-sm-10">
                                <input type="text" id="username"
                                       onChange={(e) => this.setState({
                                           username: e.target.value
                                       })}
                                       className="form-control wbdv-field wbdv-username"
                                       placeholder="Username"/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">
                                Password
                            </label>
                            <div className="col-sm-10">
                                <input type="password"
                                       onChange={(e) => this.setState({
                                           password: e.target.value
                                       })}
                                       className="form-control "
                                       placeholder="Password"/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label"></label>
                            <div className="col-sm-10">
                                <button type="button"
                                        onClick={() => this.handleLogin(this.state)}
                                        className="btn btn-primary btn-block ">Sign
                                    in
                                </button>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label"></label>
                            <div className="col-sm-10">
                                <button type="button" onClick={() => this.props.history.push('/')}
                                        className="btn btn-danger form-control">
                                    Cancel
                                </button>

                                <div className="row">

                                    <div className="col-6">
                                        <a href="#" className="wbdv-link wbdv-forgot-password">Forgot
                                            Password?</a>
                                    </div>

                                    <div className="col-6">
                                        <a href="/register"
                                           className="float-right wbdv-link wbdv-register">Sign up</a>
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

// const stateToPropertyMapper = (state) => {
//     return(
//         currentProfile: state.profile.profile
//     )
// }
//
// const dispatchToPropertyMapper = (dispatch) => {
//     return(
//         storeProfile: (user) => {
//             login(user)
//
//         }
//     )
// }
//
//
// export default connect(stateToPropertyMapper, dispatchToPropertyMapper)
// (Login)
