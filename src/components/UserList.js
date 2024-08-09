import React from "react"; 
import UserCard from './UserCard';
import { getByDisplayValue } from "@testing-library/react";

const UserList = () => {
    const users = [
        {id:1, name:'Juan Perez', email:'juan.perez@itsur.edu.mx', avatar:'https://via.placeholder.com/140'},
        {id:2, name:'Ana Rodriguez', email:'ana123@itsur.edu.mx', avatar:'https://via.placeholder.com/140'},
        {id:3, name:'Paty Torres', email:'patyv@itsur.edu.mx', avatar:'https://via.placeholder.com/140'}
    ];
    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {users.map(user => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    );
};

export default UserList;