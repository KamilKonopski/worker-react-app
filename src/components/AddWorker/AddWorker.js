import React, { useState } from 'react';

import './AddWorker.css';

function AddWorker(props) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [department, setDepartment] = useState('');
    const [salary, setSalary] = useState('');

    function changeFirstNameHandler(event) {
        const value = event.target.value;
        setFirstName(value);
    };

    function changeLastNameHandler(event) {
        const value = event.target.value;
        setLastName(value);
    };

    function changeDepartmentHandler(event) {
        const value = event.target.value;
        setDepartment(value);
    };

    function changeSalaryHandler(event) {
        const value = event.target.value;
        setSalary(value);
    };

    function addWorker() {
        const worker = {
            firstName,
            lastName,
            department,
            salary,
        };
        props.onAdd(worker);

        setFirstName('');
        setLastName('');
        setDepartment('');
        setSalary('');
    };

    return (
        <div className='addWorker'>
                <label>First Name:</label>
                <input type="text"
                    placeholder='your first name...'
                    value={firstName}
                    onChange={changeFirstNameHandler}
                />
                <label>Last Name:</label>
                <input type="text"
                    placeholder='your last name...'
                    value={lastName}
                    onChange={changeLastNameHandler}
                />
                <label>Department:</label>
                <input list='department'
                placeholder='choose your department...'
                value={department} 
                onChange={changeDepartmentHandler}
                />
                <datalist id='department'>
                    <option value="IT"/>
                    <option value="Sales"/>
                    <option value="Administration"/>
                </datalist>
                <label>Salary:</label>
                <input type="number"
                    placeholder='salary...'
                    value={salary}
                    onChange={changeSalaryHandler}
                />
                <button type='button' onClick={() => addWorker()}>Add worker</button>
        </div>
    );
};

export default AddWorker;
