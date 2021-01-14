import React, { Component } from 'react'
import UserService from '../services/UserService'

class ListUsersComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                users: []
        }
        this.addUser = this.addUser.bind(this);
      
        this.deleteUser = this.deleteUser.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    deleteUser(id){
        UserService.deleteUser2(id).then( res => {
            this.setState({users: this.state.users.filter(user => user.id !== id)});
        });
    }
    viewUser(id){
        this.props.history.push(`/list-user-property/${id}`);
    }
    

    componentDidMount(){
        UserService.getUsers().then((res) => {
            this.setState({ users: res.data});
        });
    }

    addUser(){
        this.props.history.push('/add-user/_add');
    }
    cancel(){
        this.props.history.push('/usermodel/');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">User List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addUser}> Add New User</button>
                    <button style={{marginLeft: "30px"}} className="btn btn-danger" onClick={this.cancel}> Return to Main Screen</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>Name Anonimyzed</th>
                                    <th> User Password</th>
                                    <th> Date Added</th>
                                    <th> Last Change</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.map(
                                        user => 
                                        <tr key = {user.id}>
                                            <td>{user.userid}</td>
                                             <td> { user.password} </td>   
                                             <td> {user.createdAt}</td>
                                             <td> {user.updatedAt}</td>
                                             <td>
                                                <button  onClick={ () => this.viewUser(user.userid)} className="btn btn-info">View </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteUser(user.userid)} className="btn btn-danger">Delete </button>
                                                
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListUsersComponent