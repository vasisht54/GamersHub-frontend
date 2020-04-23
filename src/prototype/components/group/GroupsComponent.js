import React from "react";
import "../../Prototype.css"
import {Group} from "./Group";
import {
    deleteGroup,
    findAllGroups,
    findUsersInGroup, getUserAdminGroups,
    getUserMemberGroups
} from "../../../service/GameGroupService";
import {findGameByIdFromGroup} from "../../../service/GameService";
import {Link} from "react-router-dom";

export class GroupsComponent extends React.Component {

    constructor(props) {
        super(props)
    }

    state = {

        component: 'a-groups',
        groups: [],
        members: [],
        game: '',

        myGroups: []
    }

    componentDidMount() {
        if(this.props.profile === null){
            alert('You can only see the groups now, log in to access all functionalities')
        }

        findAllGroups()
            .then(groups =>
                      // console.log(groups)
                      this.setState({
                                        groups: groups
                                    })
            )

        // let allMyGroups = []
        //
        // getUserMemberGroups(this.props.profile.id)
        //     .then(myGroups =>
        //         console.log((myGroups))
        //               // allMyGroups.concat(myGroups)
        //     )
        //
        // getUserAdminGroups(this.props.profile.id)
        //     .then(myGroups => {allMyGroups.concat(myGroups)
        //         this.setState({
        //                           myGroups:allMyGroups
        //                       })
        //     })
        //
        //
        //
        // this.setState({
        //     myGroups:allMyGroups
        //               })
        //
        //
        // this.state.groups.map(group => console.log(group.id))
        //
        // this.state.groups.map((group,index)=> {
        //     let members = findUsersInGroup(group.id)
        //     this.setState({
        //                       group: {...this.state.group, members:members}
        //                   })
        // })

    }

    deleteGroup = (groupId) =>
        deleteGroup(groupId)
            .then((response) =>
                      this.setState({
                                        groups: this.state.groups.filter(
                                            group => group.id !== groupId)
                                    }))

    render() {
        return (
            <div>
                <ul className="nav nav-tabs" style={{display: "inline"}}>
                    <li className="nav-item" style={{cursor: "pointer", float: "left"}}>
                        <a className="nav-link" onClick={() =>
                            this.setState({
                                              component: 'a-groups'
                                          })
                        }>
                            All Groups
                        </a>
                    </li>
                    {this.props.profile !== null && <li className="nav-item"
                                                        style={{cursor: "pointer", float: "left"}}>
                        <a className="nav-link" onClick={() =>
                            this.setState({
                                              component: 'm-groups'
                                          })
                        }>
                            My Groups
                        </a>
                    </li>}
                    {this.props.profile !== null &&
                        <li className="nav-item"
                            style={{cursor: "pointer", float: "right"}}>
                            <a className="nav-link"
                                href='/creategroup'>Create Group</a>
                        </li>
                    }
                </ul>
                <br/>

                <br/>
                {this.state.groups.length !== 0 && <div className="container">
                    {console.log(this.state.groups.length)}


                    {this.state.groups.length !== 0 && this.state.component === 'a-groups'
                     && this.state.groups.map(group =>
                                                  <Group
                                                      key={group.id}
                                                      profile={this.props.profile}
                                                      group={group}
                                                      game={this.state.game}
                                                      deleteGroup={this.deleteGroup}
                                                  />
                    )}

                    {this.state.groups.length !== 0 && this.state.component === 'm-groups'
                     && this.state.groups !== null
                     && this.state.groups.map((group, index) =>
                     (group.usersList.some(member =>
                                               // console.log(member)
                                               (member.id
                                                === this.props.profile.id))
                      ||
                      (group.groupAdmin.id === this.props.profile.id))
                     &&
                     < Group
                         group={group}
                         profile={this.props.profile}
                         deleteGroup={this.deleteGroup}
                         game={this.state.game}
                     />
                    )

                    }
                </div>}
            </div>
        )
    }

}
