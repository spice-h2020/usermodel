import React, { Component } from 'react'
import UserService from '../services/UserService'
import PropertyService from '../services/PropertyService'
class ListUserPropertyComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                user: {},
                id : this.props.match.params.id,
               propertys: [],
        }
        this.addProperty = this.addProperty.bind(this);
        this.editProperty = this.editProperty.bind(this);
        this.deleteProperty = this.deleteProperty.bind(this);
        this.usersList       = this.usersList.bind(this);
        this.propertyList       = this.propertyList.bind(this);
      //  this.getActions = this.getActions.bind(this);
    }

    componentDidMount(){
        console.log(this.props);
        console.log(this.props.match.params.id);
        if (this.state.id !== "_list") {
            UserService.getUserById2(this.state.id).then((res) => {
                console.log("User =>");
                console.log(res.data);
                this.setState({user: res.data});
                this.setState({ propertys: res.data.properties});
            });
        } else {
            PropertyService.getPropertysByName(this.props.location.state).then((res) => {
                console.log("Properties =>");
                console.log(res.data);
                //this.setState({user: res.data});
                this.setState({ propertys: res.data});

                });
        }
       
    }

    deleteProperty(userid, pname){
        this.setState({propertys: this.state.propertys.filter(property => property.pname !== pname)});
        this.setState({user : {...this.state.user,  properties:this.state.propertys, }}); 
        PropertyService.deleteProperty(this.state.user.userid,pname).then( res => {
            });
        
    }
    viewProperty(id, pname){
        this.props.history.push(`/view-property/${this.props.match.params.id}`,pname);
    }
    editProperty(id, pname){
        this.props.history.push(`/add-property/${this.props.match.params.id}`, pname);
    }
    usersList(id) {
        this.props.history.push(`/users`);
    }
    propertyList() {
        this.props.history.push(`/usermodel`);
    }
    addProperty(){
        this.props.history.push(`/add-property/${this.props.match.params.id}`);
    }

    getTitle(){
        if(this.state.id !== '_list'){
            return  <h2 className="text-center">User ({this.state.user.userid}) Properties List</h2>
        }else{
            return <h2 className="text-center">Property ({this.props.location.state}) List</h2>
        }
    }

    getFirstRow(){
        if(this.state.id !== '_list'){
            return <div className = "row"> <button className="btn btn-primary" onClick={this.addProperty}> Add Property</button> <button style={{marginLeft: "30px"}} className="btn btn-danger" onClick={this.usersList}> Return to User List</button>     </div>
        } else {
            return <div className = "row">  <button className="btn btn-danger" onClick={this.propertyList}> Return to Main List</button>     </div>

        }


    }
   

    getActions(property){
        if(this.state.id !== '_list'){
            return <td><button onClick={ () => this.editProperty(this.props.match.params.id, property.pname)} className="btn btn-info">Update </button> <button style={{marginLeft: "10px"}} onClick={ () => this.deleteProperty(this.props.match.params.id, property.pname)} className="btn btn-danger">Delete </button>             </td>
        
        }else{
            return <td> </td>

        }
    }
   
    render() {
        return (
            <div>
                 {this.getTitle()}
                 {this.getFirstRow()}
                 
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>User</th>
                                   
                                    <th> Property Name</th>
                                    <th> Property Value</th>
                                    <th> Source </th>
                                    <th> Context</th>
                                    <th> Timestamp</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.propertys.map(
                                        property => 
                                        <tr key = {property.id}>
                                            <td>{property.userid.substring(0,8)}</td>
                                               
                                             <td> {property.pname}</td>
                                             <td> {property.pvalue}</td>
                                             <td> {property.source}</td>
                                             <td> {property.context} </td>
                                             <td> {property.updatedAt}</td>
                                             {this.getActions(property)}
                                             
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

export default ListUserPropertyComponent