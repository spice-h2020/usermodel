import React, { Component } from 'react'
import ConfigService from '../services/ConfigService'

class ListPropertyConfigComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                configs: []
        }
        this.addConfig = this.addConfig.bind(this);
      
        this.deletConfig = this.deletConfig.bind(this);
        this.allOptions       = this.allOptions.bind(this);
    }

    componentDidMount(){
        ConfigService.getConfigurations().then((res) => {
            this.setState({ configs: res.data});
        });
    }

    deletConfig(pname){
        ConfigService.deleteConfig(pname).then( res => {
            this.setState({configs: this.state.configs.filter(config => config.pname !== pname)});
        });
    }
    viewConfig(pname){
        this.props.history.push(`/add-config/${pname}`);
    }
    viewAllConfig(pname){
        this.props.history.push('/list-user-property/_list',pname);
    }
    addConfig(){
        this.props.history.push('/add-config/_add');
    }
    allOptions(id) {
        this.props.history.push(`/usermodel`);
    }

    

    

    render() {
        return (
            <div>
                 <h2 className="text-center">Property Configurations List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addConfig}> Add New Property Configuration</button>
                    <button style={{marginLeft: "30px"}} className="btn btn-danger" onClick={this.allOptions}> Return to Main List</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>Property Name</th>
                                    <th> Category</th>
                                    <th> Property Type</th>
                                    <th> Constraints</th>
                                    <th> Aggregation Strategy</th>
                                    <th> Date Added</th>
                                    <th> Last Change</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.configs.map(
                                        config => 
                                        <tr key = {config.pname}>
                                            <td> {config.pname}</td>
                                            <td>{config.category}</td>
                                             <td> { config.ptype} </td>  
                                             <td> { config.constraint} </td>  
                                             <td> { config.aggregationStrategy} </td>   
                                             <td> {config.createdAt}</td>
                                             <td> {config.updatedAt}</td>
                                             <td>
                                                <button  onClick={ () => this.viewAllConfig(config.pname)} className="btn btn-info">View All </button> 
                                            
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deletConfig(config.pname)} className="btn btn-danger">Delete </button>
                                                
                                                
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

export default ListPropertyConfigComponent