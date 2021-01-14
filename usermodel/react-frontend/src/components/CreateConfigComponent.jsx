import React, { Component } from 'react'
import ConfigService from '../services/ConfigService';

class CreateConfigComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            propertyName: this.props.match.params.id,
            config  : {},
            pname : '',
            category :'',
            ptype : '',
            constraint : '',
            aggregationStrategy : ''

           
        }
        this.changePNameHandler = this.changePNameHandler.bind(this);
        this.changeCategoryHandler = this.changeCategoryHandler.bind(this);

        this.changePTypeHandler = this.changePTypeHandler.bind(this);
        this.changeConstraintHandler = this.changeConstraintHandler.bind(this);
        this.changeStrategyHandler = this.changeStrategyHandler.bind(this);

        this.saveOrUpdateConfig = this.saveOrUpdateConfig.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.propertyName === '_add'){
            return
        }else{
            //ConfigService.getUserById(this.state.id).then( (res) =>{
            ConfigService.getConfigByName(this.props.match.params.id).then( (res) =>{    
              
                this.setState(
                   {config : res.data}
                   
                    
                );
            });
        }        
    }
    saveOrUpdateConfig = (e) => {
        e.preventDefault();
       let config = {pname: this.state.pname, category: this.state.category, ptype : this.state.ptype, constraint : this.state.constraint, 
                    aggregationStrategy: this.state.aggregationStrategy, createdAt: this.state.createdAt, updatedAt: this.state.updatedAt};
        console.log('config => ' + JSON.stringify(config));

        // step 5
        if(this.state.propertyName === '_add'){

            ConfigService.createPropertyConfiguration(config).then(res =>{
                this.props.history.push('/users');
            });
        }else{
            ConfigService.updateConfig(this.config, config.pname).then( res => {
                this.props.history.push('/users');
            });
        }
    }
    
    changePNameHandler= (event) => {
        this.setState({pname: event.target.value});
    }

    changeCategoryHandler= (event) => {
        this.setState({category: event.target.value});
    }
    changePTypeHandler= (event) => {
        this.setState({ptype: event.target.value});
    }

    changeConstraintHandler= (event) => {
        this.setState({constraint: event.target.value});
    }

    changeStrategyHandler= (event) => {
        this.setState({aggregationStrategy: event.target.value});
    }
    cancel(){
        this.props.history.push('/users');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add New Property Configuration</h3>
        }else{
            return <h3 className="text-center">Update Property Configuration</h3>
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
                                            <label> Property Name (Name) </label>
                                            <input placeholder="property name" name="pName" className="form-control" 
                                                value={this.state.config.pname} onChange={this.changePNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Category</label>
                                            <input placeholder="category" name="category" className="form-control" 
                                                value={this.state.config.category} onChange={this.changeCategoryHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Property Type </label>
                                            <input placeholder="String" name="ptype" className="form-control" 
                                                value={this.state.config.ptype} onChange={this.changePTypeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Constraint </label>
                                            <input placeholder="None" name="constraint" className="form-control" 
                                                value={this.state.config.constraint} onChange={this.changeConstraintHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Strategy </label>
                                            <input placeholder="L" name="aggregationStrategy" className="form-control" 
                                                value={this.state.config.aggregationStrategy} onChange={this.changeStrategyHandler}/>
                                        </div>
                                        


                                        <button className="btn btn-success" onClick={this.saveOrUpdateConfig}>Save</button>
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

export default CreateConfigComponent