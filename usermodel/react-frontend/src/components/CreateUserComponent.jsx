import React, { Component } from 'react'
import UserService from '../services/UserService';

class CreateUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            userid: '',
            password: '',
            properties: new Set(),
            createdAt: '',
            updatedAt: ''
           
        }
        this.changeUseridHandler = this.changeUseridHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        
        this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            //UserService.getUserById(this.state.id).then( (res) =>{
            UserService.getUserById2(this.state.user.userid).then( (res) =>{    
                let user = res.data;
                this.setState({userid: user.userid,
                    password: user.password,
                    properties: user.properties,
                    createdAt: user.createdAt,
                    updatedAt: user.updatedAt

                    
                   
                    
                });
            });
        }        
    }
    saveOrUpdateUser = (e) => {
        e.preventDefault();
        let user = {userid: this.state.userid, password: this.state.password,  createdAt: this.state.createdAt, updatedAt: this.state.updatedAt};
        console.log('user => ' + JSON.stringify(user));

        // step 5
        if(this.state.id === '_add'){
            UserService.createUser(user).then(res =>{
                this.props.history.push('/users');
            });
        }else{
            UserService.updateUser2(user, this.state.user.userid).then( res => {
                this.props.history.push('/users');
            });
        }
    }
    
    changeUseridHandler= (event) => {
        this.setState({userid: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    
    cancel(){
        this.props.history.push('/users');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add User</h3>
        }else{
            return <h3 className="text-center">Update User</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        
                                        <div className = "form-group">
                                            <label> Email (Name) </label>
                                            <input placeholder="name@domain" name="anonName" className="form-control" 
                                                value={this.state.userid} onChange={this.changeUseridHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Password </label>
                                            <input placeholder="password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>
                                        


                                        <button className="btn btn-success" onClick={this.saveOrUpdateUser}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateUserComponent