import React, { Component } from 'react';

class JobList extends Component {
    state = {
        showJob: false,
    };

    handleShowHide = () => {
        this.setState({
            showJob: !this.state.showJob,
        });
    };

    handleDeleteJob(job) {
        this.props.deleteJob(job);
    }

    render() {
        const { showJob } = this.state;
        const { jobList } = this.props;
        return (
            <>
                {showJob ? (
                    <div>
                        <button onClick={() => this.handleShowHide()}>
                            Hide
                        </button>
                        {jobList.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.title} - {item.salary}$ &nbsp;
                                    <span
                                        onClick={() =>
                                            this.handleDeleteJob(item)
                                        }
                                    >
                                        x
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div>
                        <button onClick={() => this.handleShowHide()}>
                            Show
                        </button>
                    </div>
                )}
            </>
        );
    }
}

export default JobList;
