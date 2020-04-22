import React from "react";
import {profile, update} from "../../../service/UserService"
import {logout} from "../../../service/UserService";
import {Link} from "react-router-dom";
import "../../Prototype.css"


export class Profile extends React.Component{

    state = {
        profile : JSON.parse(localStorage.getItem("profile")),
        editing:false
    }

    componentDidMount() {
        if(this.state.profile.username === null) {
            this.setState({
                profile:JSON.parse(localStorage.getItem("profile"))
                          })
        }

    }

    logout = () => {
        logout()
            .then(status =>{
                localStorage.clear()
                this.props.history.push('/search')
            })
    }

    updateProfile =(updateProfile) => {
        update(updateProfile)
            .then(updateUser => {
                this.setState({
                                  profile: updateUser
                              })
                    localStorage.setItem("profile", JSON.stringify(updateUser))
            })
    }

    render() {
        return(
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
                {/*{console.log(JSON.parse(localStorage.getItem("profile")))}*/}
                {this.state.profile === null && this.props.history.push('login')}
                {this.state.profile !== null &&
                    <div className="container">

                        <h1>{this.state.profile.username}</h1>

                        <form>



                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Username</label>
                                {!this.state.editing && <div className="col-sm-10">
                                    {this.state.profile.username}
                                </div>}
                                {this.state.editing && <div className="col-sm-10">
                                    <input onChange={(e) => this.setState({
                                                                              profile: {...this.state.profile, username: e.target.value}
                                                                          })}
                                          value={this.state.profile.username}
                                        className="form-control wbdv-field wbdv-username"
                                           placeholder="Username"/>

                                </div>}
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">First Name</label>
                                {!this.state.editing && <div className="col-sm-10">
                                    {this.state.profile.firstName}
                                </div>}
                                {this.state.editing &&
                                    <div className="col-sm-10">
                                        <input onChange={(e) =>
                                            this.setState({
                                                profile: {...this.state.profile, firstName: e.target.value}
                                            })}
                                            value={this.state.profile.firstName}
                                            className="form-control wbdv-field wbdv-username"
                                            placeholder="Username"/>
                                    </div>
                                }
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Last Name</label>
                                {!this.state.editing && <div className="col-sm-10">
                                    {this.state.profile.lastName}
                                </div>}
                                {this.state.editing && <div className="col-sm-10">
                                    <input onChange={(e) => this.setState({
                                        profile: {...this.state.profile, lastName: e.target.value}
                                    })}
                                           value={this.state.profile.lastName}
                                           className="form-control wbdv-field wbdv-username"
                                           placeholder="Username"/>

                                </div>}
                            </div>


                            {this.state.editing && <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input onChange={(e) => this.setState({
                                                                              profile: {...this.state.profile, password: e.target.value}
                                                                          })}
                                           value={this.state.profile.password}
                                           type="password" className="form-control wbdv-field wbdv-password"
                                           placeholder="Password"/>
                                </div>
                            </div>}




                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Date of Birth</label>
                                {!this.state.editing && (this.state.profile.dob !== null && this.state.profile.dob !== undefined) && <div className="col-sm-10">
                                    {this.state.profile.dob.slice(0,10)}
                                </div>}
                                {this.state.editing && this.state.profile.dob !== null && <div className="col-sm-10">
                                    <input onChange={(e) => this.setState({
                                                                              profile: {...this.state.profile, dob: e.target.value}
                                                                          })}
                                           value={this.state.profile.dob.slice(0,10)}
                                        type="date" className="form-control wbdv-field wbdv-dob"/>
                                </div>}
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-2"></label>
                                {!this.state.editing && <div className="col-sm-10">
                                    <button onClick={() =>
                                        // console.log(this.state.profile)
                                        this.setState({
                                            editing: true
                                                      })
                                    }
                                            type="button"
                                            className="btn btn-primary form-control">
                                        Edit
                                    </button>
                                </div>}
                                {this.state.editing && <div className="col-sm-10">

                                    <button onClick={() => {
                                        this.setState({
                                            editing:false
                                                      })
                                        // console.log(this.state.profile)
                                        this.updateProfile(this.state.profile)
                                    }}
                                        type="button"
                                            className="btn btn-success form-control">
                                        Update
                                    </button>
                                </div>}
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-2"></label>
                                <div className="col-sm-10">
                                    <button type="button" onClick={this.logout}
                                            className="btn btn-danger form-control">
                                        Logout
                                    </button>
                                </div>
                            </div>

                        </form>
                    </div>
                }
            </div>
        )
    }

}
