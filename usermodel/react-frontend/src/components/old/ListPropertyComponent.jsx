//File not in use

import React, { Component } from 'react'
import PropertyService from '../../services/PropertyService'

class ListPropertyComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                propertys: []
        }
        this.addProperty = this.addProperty.bind(this);
        this.editProperty = this.editProperty.bind(this);
        this.deleteProperty = this.deleteProperty.bind(this);
    }

    deleteProperty(id){
        PropertyService.deleteProperty(id).then( res => {
            this.setState({propertys: this.state.propertys.filter(property => property.id !== id)});
        });
    }
    viewProperty(id){
        this.props.history.push(`/view-property/${id}`);
    }
    editProperty(id){
        this.props.history.push(`/add-property/${id}`);
    }

    componentDidMount(){
        PropertyService.getPropertys().then((res) => {
            this.setState({ propertys: res.data});
        });
    }

    addProperty(){
        this.props.history.push('/add-property/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">User Properties List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addProperty}> Add Property</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>User</th>
                                    <th> Property Category</th>
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
                                            <td>{property.user}</td>
                                             <td> { property.category} </td>   
                                             <td> {property.pname}</td>
                                             <td> {property.pvalue}</td>
                                             <td> {property.source}</td>
                                             <td> {property.context} </td>
                                             <td> {property.timestamp}</td>
                                             <td>
                                                 <button onClick={ () => this.editProperty(property.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteProperty(property.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewProperty(property.id)} className="btn btn-info">View </button>
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

export default ListPropertyComponent