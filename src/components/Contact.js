import React, { Component } from 'react'
class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className='container'>
            <div className='card border-0 shadow rounded-3 my-5'>
              <div className='text-center p-5 text-primary'>
                  <h2>Developers</h2>
              </div>

              <div className='text-center p-5'>
                <h4>1. Raju Sahu</h4>
                <table className="table table-bordered">
                    <thead>
                    <tr className='text-success'>
                        <th>Mobile Number</th>
                        <th>Email Id</th>

                    </tr>
                    </thead>
                    <tbody>
                        <tr className='text-danger'>
                        <td>939921
                            7325</td>
                        <td>naimish
                            sahu
                            08@gmail.com</td>

                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='text-center p-5'>
                <h4>2. Hemanth</h4>
                <table className="table table-bordered">
                    <thead>
                    <tr className='text-success'>
                        <th>Mobile Number</th>
                        <th>Email Id</th>

                    </tr>
                    </thead>
                    <tbody>
                        <tr className='text-danger'>
                        <td>XXXX-XXXX</td>
                        <td>abc
                            @gmail.com</td>

                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </div>
        )
    }
}

export default Contact