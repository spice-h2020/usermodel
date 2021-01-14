import React, { Component } from 'react'


class MainComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
               
        }
        this.viewUsers = this.viewUsers.bind(this);
      
       
        this.viewConfigs = this.viewConfigs.bind(this);
    }

    componentDidMount(){
        
    }

    viewUsers(){
        this.props.history.push(`/users/`);
    }
   

    

    
    viewConfigs(){
        this.props.history.push('/list-configurations/');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">UserModeling</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.viewConfigs}> Configure Properties for Models</button>
                    <button style={{marginLeft: "30px"}} className="btn btn-primary" onClick={this.viewUsers}> Model Property Configurations</button>
                 </div>
                 <br></br>
                 

                

            </div>
        )
    }
}

export default MainComponent