import React, { useState } from 'react';

function App() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const addStudent = async () => {
        await fetch('http://localhost:5000/students', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, age: Number(age) })
        });
        alert('Student Added Successfully');
    };

    return (
        <div>
            <h2>Student Management</h2>
            <input placeholder="Enter Name"
                onChange={e => setName(e.target.value)} />
            <input placeholder="Enter Age"
                onChange={e => setAge(e.target.value)} />
            <button onClick={addStudent}>Add Student</button>
        </div>
    );
}

export default App;