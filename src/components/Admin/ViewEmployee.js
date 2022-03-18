import React, { Component } from 'react';

import StaffService from "../../services/StaffService";




class ViewEmployee extends Component {
    constructor(props) {
        super(props)

        this.state = {

          staff: [],
        };
      }

      componentDidMount() {

        StaffService.getEmployeeById(this.state.id).then( res => {
            this.setState({staff: res.data });
        });
      }



    render(){
       return(


<>
<div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Employee First Name: </label>
                            <div> { this.state.staff.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Last Name: </label>
                            <div> { this.state.staff.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Email ID: </label>
                            <div> { this.state.staff.emailId }</div>
                        </div>
                    </div>

                </div>
            </div>
</>


)


    }

}

export default ViewEmployee;