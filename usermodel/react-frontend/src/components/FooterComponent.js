import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className = "footer">
                    <span className="text-muted" style={{marginLeft: "10px"}}>SPICE @University of Haifa</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent