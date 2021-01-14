import React, { Component } from 'react'
import UserService from '../../services/UserService'

class ViewPropertyComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            property: {}
        }

    }

    componentDidMount(){
        console.log(this.props);
        UserService.getPropertyByUseridPropertyName(this.props.location.state, this.props.match.params.id).then( res => {
            this.setState({property: res.data});
        })
    }


    cancel(id) {
        this.props.history.push(`/list-user-property/${this.props.match.params.id}`);
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Property Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> User: </label>
                            <div style={{marginLeft: "10px"}}> { this.state.property.userid }</div>
                        </div>
                        <div className = "row">
                            <label> Category: </label>
                            <div style={{marginLeft: "10px"}}> TBA</div>
                        </div>
                        <div className = "row">
                            <label> Property Name: </label>
                            <div style={{marginLeft: "10px"}}> { this.state.property.pname }</div>
                        </div>
                        <div className = "row">
                            <label> Property Value: </label>
                            <div style={{marginLeft: "10px"}}> { this.state.property.pvalue }</div>
                        </div>
                        <div className = "row">
                            <label> Source: </label>
                            <div style={{marginLeft: "10px"}}> { this.state.property.source }</div>
                        </div>
                        <div className = "row">
                            <label> Context: </label>
                            <div style={{marginLeft: "10px"}}> { this.state.property.context }</div>
                        </div>
                        <div className = "row">
                            <label> Updated at: </label>
                            <div style={{marginLeft: "10px"}}> { this.state.property.updatedAt }</div>
                        </div>
                    </div>

                </div>
                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Return</button>
            </div>
        )
    }
}

export default ViewPropertyComponent