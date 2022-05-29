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

    render() {
        const { jobList } = this.props;
        const { showJob } = this.state;

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
                                    {item.title} - {item.salary}
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
