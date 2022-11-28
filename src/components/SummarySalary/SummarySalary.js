import React, { useState } from 'react';

import './SummarySalary.css';

function SummarySalary(props) {

    const [salaryOfDepartment, setSalaryOfDepartment] = useState([]);
    const [result, setResult] = useState(0);

    function handleSummarySalary(event) {
        const searchWord = event.target.value;
        const searchedDepartment = props.workers.filter(value => {
            return value.department.includes(searchWord);
        })
        setSalaryOfDepartment(searchedDepartment)
        if(searchWord === "IT") {
            const salaryOfIT = salaryOfDepartment.forEach(salary => {
                return result += salary.salary
            })
                setResult(result)
        } else if(searchWord === "Sales") {
            const salaryOfSales = salaryOfDepartment.forEach(salary => {
                return result += salary.salary
            })
                setResult(result)
        } else if(searchWord === "Administration") {
            const salaryOfAdministration = salaryOfDepartment.forEach(salary => {
                return result += salary.salary
            })
                setResult(result)
        } else {
            setResult(0)
        }
    }

    return (
        <div className="summary">
            <input type="text" onChange={handleSummarySalary}/>
            <p>Summary</p>
            <p>{result} USD</p>     
        </div>
    );
};

export default SummarySalary;
