import React from "react";
import {findUserById} from "../../../service/UserService";
import {getUserAdminGroups} from "../../../service/GameGroupService";
import {Link} from "react-router-dom";
import "../../Prototype.css"


export class UserProfile extends React.Component{

    state = {
        userProfile:'',
        userGroups:[]
    }

    componentDidMount() {
        findUserById(this.props.userId)
            .then(userProfile =>
            this.setState({
                userProfile:userProfile
                          })
            )

        getUserAdminGroups(this.props.userId)
            .then(adminGroups =>
            this.setState({
                userGroups: adminGroups
                          }))

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.userId !== this.props.userId){
            findUserById(this.props.userId)
                .then(userProfile =>
                          this.setState({
                                            userProfile:userProfile
                                        })
                )

            getUserAdminGroups(this.props.userId)
                .then(adminGroups =>
                          this.setState({
                                            userGroups: adminGroups
                                        }))
        }
    }

    render() {
        return(
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
                    <h1>Profile</h1>
                    <br/>
                    <form>
                        <div className="row">
                            <h4 className="col-2"
                                style={{float: "left"}}>User Name</h4>



                            <p className="form-control col-10">{this.state.userProfile.username}</p>

                        </div>
                        <div className="row">
                            <h4 className="col-2"
                                style={{float: "left"}}>First Name</h4>



                            <p className="form-control col-10">{this.state.userProfile.firstName}</p>

                        </div>
                        <div className="row">
                            <h4 className="col-2"
                                style={{float: "left"}}>Last Name</h4>



                            <p className="form-control col-10">{this.state.userProfile.lastName}</p>

                        </div>
                        <div className="row">
                            <h4 className="col-2"
                                style={{float: "left"}}>Date of Birth</h4>



                            <p className="form-control col-10">{this.state.userProfile.dob}</p>

                        </div>
                        <div className="row container-fluid">
                            <h4 className="col-2">Groups Owned</h4>

                            <div className="col-10 ">
                                {this.state.userGroups.length>0 && <div>
                                    <ul className="list-group">
                                        {this.state.userGroups.map(group =>
                                            <li key={group.id} className="list-group-item m-2">
                                                <h3>{group.name}</h3>
                                                <ul className="list-group">
                                                    {group.usersList.map(user =>
                                                        <li className="list-group-item">
                                                            <Link to={`/gamebook/user/${user.id}`}
                                                                  style={{float: "left"}}
                                                                  href=""> {user.username}</Link>
                                                        </li>
                                                    )}
                                                </ul>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                                }
                            </div>

                        </div>
                    </form>
                </div>
            </div>

        )
    }

}
