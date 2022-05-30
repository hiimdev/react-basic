import React, { Component } from 'react';

class Form extends Component {
    state = {
        title: '',
        salary: '',
    };

    handleChangeTitle(event) {
        this.setState({
            title: event.target.value,
        });
    }

    handleChangeSalary(event) {
        this.setState({
            salary: event.target.value,
        });
    }

    handleAddNewJob(event) {
        event.preventDefault();
        if (!this.state.title || !this.state.salary) {
            alert(`missing require`);
            return;
        }

        this.props.addJob({
            id: Math.floor(Math.random() * 1000),
            title: this.state.title,
            salary: this.state.salary,
        });

        this.setState({
            title: '',
            salary: '',
        });
    }

    render() {
        const { title, salary } = this.state;

        return (
            <>
                <form>
                    <label htmlFor="fname">Job title:</label>
                    <br />
                    <input
                        type="text"
                        value={title}
                        onChange={(event) => this.handleChangeTitle(event)}
                    />
                    <br />
                    <label htmlFor="lname">Salary:</label>
                    <br />
                    <input
                        type="text"
                        value={salary}
                        onChange={(event) => this.handleChangeSalary(event)}
                    />
                    <br />
                    <br />
                    <input
                        type="submit"
                        value="Add New job"
                        onClick={(event) => this.handleAddNewJob(event)}
                    />
                </form>
                <br />
            </>
        );
    }
}

export default Form;
