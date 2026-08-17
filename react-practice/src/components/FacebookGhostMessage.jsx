import { useState } from 'react';


function FacebookGhostMessage() {
    //STATE - Same data, but React tracks it!
    const [users, setUsers] = useState([5, 3, 2]);

    // Calculate total (auto updates when users change)
    const total = users[0] + users[1] + users[2];

    // READ ALL - only need to change state(variable which content data) 
    const readAllMessages = () => {
        // React automatically updates EVERYWHERE!
        setUsers([0, 0, 0]);
        
        console.log('Data (State):', [0, 0, 0]);
        console.log('UI auto-updated! No ghost messages!');
    };

    return (
        <>
            <h1>📱 Messages</h1>
            
            {/* React auto-updates these values */}
            <div>Total: {total}</div>
            <div>👤 User1: {users[0]}</div>
            <div>👤 User2: {users[1]}</div>
            <div>👤 User3: {users[2]}</div>
            
            <button onClick={readAllMessages}>✅ Read All</button>
        </>
    );
}

export default FacebookGhostMessage;