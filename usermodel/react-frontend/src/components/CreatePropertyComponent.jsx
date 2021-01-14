import React, { Component } from 'react'
// import UserService from '../services/UserService';
import PropertyService from '../services/PropertyService';

class CreatePropertyComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
                action: '',
                id: this.props.match.params.id,    
                
            //    category: '',
                property: {},
                
                pname: '',
                pvalue: '',
                source: '',
                context: ''
               
        }
        
            // step 2
           
        
    //    this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
        this.changePNameHandler = this.changePNameHandler.bind(this);
        this.changePValueHandler = this.changePValueHandler.bind(this);
        this.changeSourceHandler = this.changeSourceHandler.bind(this);
        this.changeContextHandler = this.changeContextHandler.bind(this);
        this.saveOrUpdateProperty = this.saveOrUpdateProperty.bind(this);
    }

    // step 3
    
    componentDidMount(){
        console.log(this.props);
        console.log(this.props.match.params.id);
        
            
        
        // step 4

        if(this.props.location.state !== undefined){
            this.setState({action : "Update"});
            console.log("action => Update")
            PropertyService.getPropertyById(this.props.location.state, this.props.match.params.id).then( res => {
                this.setState({property: res.data});
                
                this.setState({pname: res.data.pname});
                this.setState({pvalue: res.data.pvalue});
                this.setState({source: res.data.source});
                this.setState({context: res.data.context});
                
            })
            return
        }else{
            this.setState({action : "Add"});
            console.log("action => Add")
        };
            
          
              
    }


    saveOrUpdateProperty = (e) => {
        e.preventDefault();
        let property = {pname: this.state.pname, pvalue: this.state.pvalue, source: this.state.source, context: this.state.context, userid : this.state.id };
       /*
        let propertys = this.state.user.properties;
        if (propertys.length===0) {
            console.log('properties empty');
            propertys[0]=property;    
        } else {
            propertys.push(property);
        }
        this.setState({user : {...this.state.user,  properties:propertys, }}); 
        //const userCopy = {...this.state.user, properties: propertys};
        //this.setState({user: userCopy});
        //let userCopy = JSON.parse(JSON.stringify(this.state.user));
        console.log('property => ' + JSON.stringify(property));
        console.log('propertys => ' + JSON.stringify(propertys));
     //   console.log('userCopy => ' + JSON.stringify(userCopy));
        console.log('user => ' + JSON.stringify(this.state.user));
        //userCopy.properties = userCopy.properties.concat(property);
        //console.log('userCopy.properties => ' + JSON.stringify(userCopy.properties));
       

        // step 5
        if(this.state.id === '_add'){
            
        }else{
           
        };
        //console.log('user => ' + JSON.stringify(this.state.user));
        console.log('user.properties => ' + JSON.stringify(this.state.user.properties));
        console.log('id => ' + this.props.match.params.id);
        
        UserService.updateUser2(this.state.user, this.props.match.params.id).then( res => {
            this.props.history.push(`/list-user-property/${this.state.user.userid}`);
        });
        */
       if (this.state.action === "Add") {
        PropertyService.createProperty(property,this.state.id).then( res => {
            this.props.history.push(`/list-user-property/${this.state.id}`);
        });
       } else {
        PropertyService.updateProperty(property,this.state.id).then( res => {
            this.props.history.push(`/list-user-property/${this.state.id}`);
        });
       }
       
  
    }
    /*
    changeCategoryHandler= (event) => {
        this.setState({category: event.target.value});
    }
*/
    changePNameHandler= (event) => {
        this.setState({pname: event.target.value});
    }

    changePValueHandler= (event) => {
        this.setState({pvalue: event.target.value});
    }

    changeSourceHandler= (event) => {
        this.setState({source: event.target.value});
    }

    changeContextHandler= (event) => {
        this.setState({context: event.target.value});
    }

    cancel(){
        this.props.history.push(`/list-user-property/${this.state.id}`);
    }

    getTitle(){
        if(this.state.action === 'Add'){
            return <h3 className="text-center">Add Property</h3>
        }else{
            return <h3 className="text-center">Update Property</h3>
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
                                        {/*
                                        <div className = "form-group">
                                            <label> Category: </label>
                                            <select options={this.state.category.values()} name="category" value={this.state.category} onChange={this.changeCategoryHandler}>
                                            
                                                
                                                
                                            </select>
                                        </div>
                                        */}
                                        <div className = "form-group">
                                            <label> Property name: </label>
                                            <input placeholder="Property name" name="pname" className="form-control" 
                                                value={this.state.pname} onChange={this.changePNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Property value: </label>
                                            <input placeholder="Property value" name="pvalue" className="form-control" 
                                                value={this.state.pvalue} onChange={this.changePValueHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Source: </label>
                                            <input placeholder="Source" name="source" className="form-control" 
                                                value={this.state.source} onChange={this.changeSourceHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Context: </label>
                                            <input placeholder="Context" name="context" className="form-control" 
                                                value={this.state.context} onChange={this.changeContextHandler}/>
                                        </div>


                                        <button className="btn btn-success" onClick={this.saveOrUpdateProperty}>Save</button>
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

export default CreatePropertyComponent