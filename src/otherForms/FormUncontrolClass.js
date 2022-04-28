import React, { Component, createRef } from 'react';

class FormUncontrolClass extends Component {

    constructor() {
        super()
        this.state = {  
            formData: {}
        }

        this.userNameRef = createRef()
        this.passwordRef = createRef()
        this.emailRef = createRef()
    }

    handleSubmit = e => {
        e.preventDefault()

        let formData = {
            username: this.userNameRef.current.value,
            password: this.passwordRef.current.value,
            email: this.emailRef.current.value
        }

        console.log(formData)
        this.setState({ formData })
    }

    render() { 
        console.log('Uncontrolled Form (class)')
        return (  
            <form onSubmit={this.handleSubmit}>

                <label htmlFor="username">username:</label>
                <input 
                    id="username" 
                    ref={this.userNameRef}
                />

                <label htmlFor="password">password:</label>
                <input 
                    id="password" 
                    ref={this.passwordRef}
                    type="password"
                />

                <label htmlFor="email">email:</label>
                <input 
                    id="email" 
                    ref={this.emailRef}
                    type="email"
                />

                <button>Submit</button>

            </form>
        );
    }
}
 
export default FormUncontrolClass;



// ref={element => this.email = element}  