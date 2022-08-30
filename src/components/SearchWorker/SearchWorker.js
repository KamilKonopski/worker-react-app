import React, { useState } from 'react';

import './SearchWorker.css';

const SearchWorker = props => {

    const [filteredPerson, setFilteredPerson] = useState([]);
    const [filteredDepartment, setFilteredDepartment] = useState([]);
    const [filteredSalary, setFilteredSalary] = useState([]);

    const handleSearchPerson = event => {
        const searchPerson = event.target.value;
        const newFilter = props.workers.filter(value => {
           return  value.lastName.toLowerCase().includes(searchPerson);   
       });

       if (searchPerson === "") {
           setFilteredPerson([]);
       } else {
        setFilteredPerson(newFilter)
       };
    };

    const handleSearchDepartment = event => {
        const searchDepartment = event.target.value;
        const newFilter = props.workers.filter(value => {
            return value.department.includes(searchDepartment);
        });

        if(searchDepartment === "") {
            setFilteredDepartment([]);
        } else {
            setFilteredDepartment(newFilter);
        };
    };

    const handleSearchSalary = event => {
        const searchSalary = event.target.value;
        const newFilter = props.workers.filter(value => {
            return value.salary.toString().includes(searchSalary);
        });

        if(searchSalary === "") {
            setFilteredSalary([]);
        } else if(searchSalary >= filteredSalary) {
            setFilteredSalary(newFilter);
        }
    }

    return (
        <div className='search'>
            <div className='searchForm'>
                <label>Search a person:</label>
                <input type="text"
                    placeholder='Search a person...'
                    onChange={handleSearchPerson}
                />
                <label>Search by department:</label>
                <input list='department'
                    placeholder='Search by department...'
                    onChange={handleSearchDepartment}
                />
                <datalist id='department'>
                        <option value="IT"/>
                        <option value="Sales"/>
                        <option value="Administration"/>
                    </datalist>
                <label>Search by salary:</label>
                <input type="number"
                    placeholder='Search by salary...'
                    onChange={handleSearchSalary}
                />
            </div>
            <div className='results'>
                <ul>
                    {filteredPerson.map((value, index) => (
                    <div key={index}>
                    <li>{value.firstName}</li>
                    <li>{value.lastName}</li>
                    <li>{value.department}</li>
                    <li>{value.salary}</li>
                    </div>
                ))}
                </ul>
                <ul>
                    {filteredDepartment.map((value, index) => (
                        <div key={index}>
                            <li>{value.firstName}</li>
                            <li>{value.lastName}</li>
                            <li>{value.department}</li>
                            <li>{value.salary}</li>
                        </div>
                    ))}
                </ul>
                <ul>
                    {filteredSalary.map((value, index) => (
                        <div key={index}>
                            <li>{value.firstName}</li>
                            <li>{value.lastName}</li>
                            <li>{value.department}</li>
                            <li>{value.salary}</li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SearchWorker;