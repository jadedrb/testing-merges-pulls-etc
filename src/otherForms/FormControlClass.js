import React, { Component } from 'react';

class FormControlClass extends Component {

    constructor() {
        super()

        this.state = {  
            username: '',
            password: '',
            email: '',
            submitted: false
        }
    }

    handleChange = event => this.setState({ [event.target.id]: event.target.value })

    render() { 
        console.log('Controlled Form (class)')
        return (  
            <form onSubmit={this.handleSubmit}>

                <label htmlFor="username">username:</label>
                <input 
                    id="username" 
                    onChange={this.handleChange}
                    value={this.state.username}
                />

                <label htmlFor="password">password:</label>
                <input 
                    id="password" 
                    onChange={this.handleChange}
                    value={this.state.password} 
                    type="password"
                />

                <label htmlFor="email">email:</label>
                <input 
                    id="email" 
                    onChange={this.handleChange} 
                    value={this.state.email}
                    type="email"
                />

                <button>Submit</button>

            </form>
        );
    }
}
 
export default FormControlClass;