import React, { Component } from 'react'


class UpdateEmployeeDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2

        }

    }

    // step 3


    render() {
        return (
            <div>
                <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control"
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control"
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control"
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <button className="btn btn-success">Save</button>
                                        <button className="btn btn-danger" style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
            </div>
        )
    }
}

export default UpdateEmployeeDetails