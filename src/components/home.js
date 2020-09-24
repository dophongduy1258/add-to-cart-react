import React, { Component } from 'react';
import {Table,Button} from 'reactstrap';
import {BrowserRouter as Router,Route,Link, Switch} from 'react-router-dom';


export default class Home extends Component{
    render(){
        return(
            <div>
                <Button color="primary" className="mt-5 mb-5 ml-5">
                    <Link to="/products/" style={{color:"#fff"}}>Add</Link>
                </Button>
                

                



                {/* <Table dark>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>
                                <Button color="warning" >Edit</Button>
                                <Button color="danger" className="ml-5">Delete</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table> */}
            </div>
        )
    }
}