import React from "react";
import "../../Prototype.css"
import {DisplayGroupsComponent} from "./DisplayGroupsComponent";
import {EditGroupComponent} from "./EditGroupComponent";
import {
    addUserToGameGroup, deleteGroup, deleteUserFromGroup,
    findUsersInGroup,
    getGroupAdmin, groupUpdate
} from "../../../service/GameGroupService";
import {
    findGameByIdFromGroup,
    findMyGameByName,
    getGameIdForGroup
} from "../../../service/GameService";
import {Link} from "react-router-dom";

export class Group extends React.Component {

    constructor(props) {
        super(props)
    }

    state = {
        groupInfo: this.props.group,
        editing: false,
        members: this.props.group.usersList,
        profile: this.props.profile,
        admin: '',
        isMember: '',
        game:''
        // this.props.group.members.some((member) => member.id === this.props.profile.id)
    }

    componentDidMount() {
        if (this.props.profile !== null) {
            this.setState({
                              isMember: this.props.group.usersList.some(
                                  (member) => member.id === this.props.profile.id)
                          })
        }

        getGroupAdmin(this.props.group.id)
            .then((admin) => this.setState({
                                               admin: admin
                                           }))

        getGameIdForGroup(this.props.group.id)
            .then(gameId => findGameByIdFromGroup(gameId)
                .then(game => this.setState({
                    game:game
                                    })))


    }
    updateGroup = (group, groupId) =>
        groupUpdate(group, groupId)
            .then(updatedGroup => this.setState({
                                                    groupInfo: {
                                                        ...this.state.groupInfo,
                                                        name: updatedGroup.name,
                                                        description: updatedGroup.description
                                                    }
                                                }))

    addMe = () =>
        addUserToGameGroup(this.props.group.id, this.props.profile.id)
            .then((response) =>
                      this.setState({
                                        members: this.state.members.push({
                                                                             id: this.props.profile.id,
                                                                             username: this.props.profile.username,

                                                                         }),
                                        isMember: true
                                    }
                      ))

    deleteMemberFromGroup = (userId) =>
        deleteUserFromGroup(this.props.group.id, userId)
            .then((response) =>
                      this.setState({
                                        members: this.state.members.filter(
                                            member => member.id !== userId)
                                    }))

    render() {
        return (
            <div>

                <ul className="list-group m-4">

                    <li className="list-group-item">
                        <form>

                            <h1 >
                            <Link to={`/gamebook/groups/${this.props.group.id}`}
                                  style={{float: "left"}}
                                  href=""> {this.props.group.name}</Link>
                        </h1>

                        <br/>
                            {!this.state.editing && <div>

                                {this.props.profile !== null &&
                                 <div className="row" style={{float: "right"}}>
                                     {((this.state.admin.id
                                        === this.props.profile.id) || (this.props.profile.id === 31))
                                      &&
                                      <button style={{float: "right"}}
                                              className="btn fa fa-edit"
                                              onClick={() =>
                                                  this.setState({
                                                                    editing: true
                                                                })}
                                      ></button>}
                                 </div>
                                }
                                {this.props.profile !== null && <div className="row" style={{float: "right"}}>
                                    {((!this.state.isMember && (!this.state.isMember
                                     && (this.props.profile.id !== this.state.admin.id)))&& this.props.profile.id !== 31) &&
                                     <button style={{float: "right"}}
                                             className="btn btn-success"
                                             onClick={() =>
                                                 this.addMe()
                                             }

                                             type="button"
                                     >
                                         Add Me
                                     </button>
                                    }
                                </div>}
                                <br/>
                               <div>
                                <DisplayGroupsComponent
                                    profile={this.props.profile}
                                    group={this.props.group}
                                    members={this.state.members}
                                    admin={this.state.admin}
                                    groupInfo={this.state.groupInfo}
                                    game={this.state.game}

                                />
                                </div>
                            </div>
                            }

                            {this.state.editing && <div><EditGroupComponent
                                profile={this.props.profile}
                                group={this.props.group}
                                members={this.state.members}
                                admin={this.state.admin}
                                updateGroup={this.updateGroup}
                                deleteMemberFromGroup={this.deleteMemberFromGroup}
                                deleteGroup={this.props.deleteGroup}
                                game={this.state.game}

                            />
                                <br/>

                               {this.props.profile !== null && <div>
                                {(this.props.profile !== null && this.state.admin.id
                                 === this.props.profile.id || this.props.profile.id === 31)&& <button
                                     onClick={() =>
                                         this.setState({
                                                           editing: false
                                                       })}
                                     className="btn btn-success form-control">Done</button>}

                               </div>}
                            </div>}
                        </form>
                    </li>
                </ul>
            </div>
        )
    }
}


