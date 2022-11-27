import React from 'react';

import AddWorker from './components/AddWorker/AddWorker';
import SearchWorker from './components/SearchWorker/SearchWorker';
import SummarySalary from './components/SummarySalary/SummarySalary';
import Worker from './components/Worker/Worker';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      workers: [
        {
          firstName: 'John',
          lastName: 'Smith',
          department: 'IT',
          salary: 3000,
        },
        {
          firstName: 'Jane',
          lastName: 'Doe',
          department: 'IT',
          salary: 3000.5,
        },
        {
          firstName: 'Bob',
          lastName: 'Colman',
          department: 'Sales',
          salary: 9000,
        },
        {
          firstName: 'Barbara',
          lastName: 'O`Connor',
          department: 'Sales',
          salary: 4000,
        },
        {
          firstName: 'Adam',
          lastName: 'Murphy',
          department: 'Administration',
          salary: 2000,
        },
      ]
    }
  }

  addWorker(worker) {
    const workers = [...this.state.workers];
    workers.push(worker)
    this.setState({ workers })
  }

  render() {

    return (
      <div className='app'>
        <div className='newWorker'>
        <h2>Add new Worker</h2>
        <AddWorker onAdd={(worker) => this.addWorker(worker)}/>
        </div>
        <div className='searchWorkers'>
          <h2>Search Worker / Workers</h2>
          <SearchWorker workers={this.state.workers}/>
        </div>
        <div className="allWorkers">
          <h2>All Workers</h2>
          <div className='workers'>
            {this.state.workers.map((worker, index) => (
              <Worker 
                key={index}
                id={index}
                firstName={worker.firstName}
                lastName={worker.lastName}
                department={worker.department}
                salary={worker.salary}
              />
            ))}
            <SummarySalary 
              workers={this.state.workers}
            />
          </div>
        </div>
      </div>
    );
  };
};

export default App;
