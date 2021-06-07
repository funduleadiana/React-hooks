import React from 'react';


const UserTable=()=> (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>User</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody> 
            <tr>
                <td>Name data</td>
                <td>User data</td>
                <td>
                    <button className="button">Edit</button>
                    <button className="button">Delete</button>
                </td>
            </tr>
        </tbody>
    
    </table>
);

export default UserTable;