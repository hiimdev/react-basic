import React, { Component } from 'react';

import JobList from './JobList';

class Form extends Component {
    state = {
        firstName: '',
        lastName: '',
        jobList: [
            { id: 123, title: 'front-end', salary: '1000$' },
            { id: 456, title: 'back-end', salary: '1200$' },
            { id: 789, title: 'testers', salary: '500$' },
        ],
    };

    handleFirstName(event) {
        this.setState({
            firstName: event.target.value,
        });
    }

    handleLastName(event) {
        this.setState({
            lastName: event.target.value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    }

    render() {
        const { firstName, lastName, jobList } = this.state;

        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label>
                    <br />
                    <input
                        type="text"
                        value={firstName}
                        onChange={(event) => this.handleFirstName(event)}
                    />
                    <br />
                    <label htmlFor="lname">Last name:</label>
                    <br />
                    <input
                        type="text"
                        value={lastName}
                        onChange={(event) => this.handleLastName(event)}
                    />
                    <br />
                    <br />
                    <input
                        type="submit"
                        value="Submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>
                <br />

                <JobList jobList={jobList} />
            </>
        );
    }
}

export default Form;
