import React, { Component } from 'react';

import Form from './Form';
import JobList from './JobList';

class MyComponent extends Component {
    state = {
        jobList: [
            { id: 123, title: 'front-end', salary: '1000' },
            { id: 456, title: 'back-end', salary: '1200' },
            { id: 789, title: 'tester', salary: '500' },
        ],
    };

    addJob = (job) => {
        this.setState({
            jobList: [...this.state.jobList, job],
        });
    };

    deleteJob = (job) => {
        let currentJob = this.state.jobList;
        currentJob = currentJob.filter((item) => item.id !== job.id);

        this.setState({
            jobList: currentJob,
        });
    };

    render() {
        const { jobList } = this.state;
        return (
            <>
                <Form addJob={this.addJob} />
                <JobList deleteJob={this.deleteJob} jobList={jobList} />
            </>
        );
    }
}

export default MyComponent;
