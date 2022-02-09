import React, { Component } from 'react';
import '../css/Sidebar.css';
import StaffService from "../services/StaffService";



class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
          staff: [],
        };
      }

      componentDidMount() {
        StaffService.getAllStaff().then((res) => {
          this.setState({ staff: res.data });
        });
      }



    render(){
       return(


<>
</>


)


    }

}

export default Sidebar;