import React from 'react';
import UserRow from './UserRow.js'

const UserListComponent = ({users, deleteUser}) => {

    return (
        <div className="list-group container-fluid wbdv-list">
            {
                users.map(function(user, index){
                    return (
                        <div key={index} className="list-group-item wbdv-row wbdv-user">
                            <UserRow
                                key={user.id}
                                user={user}
                                deleteUser={deleteUser}/>
                        </div>
                    )
                })
            }
        </div>
    );
}


export default UserListComponent

