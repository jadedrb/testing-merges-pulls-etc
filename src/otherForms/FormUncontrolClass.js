import React, { Component, createRef } from 'react';

class FormUncontrolClass extends Component {

    state = {  
        formData: {}
    }

    userNameRef = createRef()
    passwordRef = createRef()
    emailRef = createRef()

    handleSubmit = e => {
        e.preventDefault()

        let formData = {
            username: this.userNameRef.current.value,
            password: this.passwordRef.current.value,
            email: this.email.value
        }

        console.log(formData)
        this.setState({ formData })
    }

    render() { 
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
                    ref={element => this.email = element}  
                    type="email"
                />

                <button>Submit</button>

            </form>
        );
    }
}
 
export default FormUncontrolClass;