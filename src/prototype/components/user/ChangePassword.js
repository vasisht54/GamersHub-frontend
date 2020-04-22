import React from "react";
import {Link} from "react-router-dom";
import "../../Prototype.css"

export class ChangePassword extends React.Component{

    constructor(props){
        super(props)
    }

    state = {
        password: '',
        verifyPassword: '',
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
                <form>
                    <label className="col-sm-2 col-form-label">New Password</label>
                    <div className="col-sm-10">
                        <input onChange={(e) => this.setState({
                                                                  profile: {...this.state.profile, password: e.target.value}
                                                              })}
                               value={this.state.profile.password}
                               type="password" className="form-control wbdv-field wbdv-password"
                               placeholder="Password"/>
                    </div>

                    <label className="col-sm-2 col-form-label">Verify Password</label>
                    <div className="col-sm-10">
                        <input onChange={(e) => this.setState({
                                                                  profile: {...this.state.profile, password: e.target.value}
                                                              })}
                               value={this.state.profile.password}
                               type="password" className="form-control wbdv-field wbdv-password"
                               placeholder="Password"/>
                    </div>

                </form>
            </div>
        )
    }

}
