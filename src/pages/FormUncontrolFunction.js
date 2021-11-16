import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom'

const FormUncontrolFunction = () => {

    let history = useHistory()

    let userNameRef = useRef()
    let passwordRef = useRef()
    let emailRef = useRef()

    useEffect(() => {
        userNameRef.current.focus()
        console.log(history)
    }, [history])

    const handleSubmit = e => {
        e.preventDefault()
        
        let formData = {
            username: userNameRef.current.value,
            password: passwordRef.current.value,
            email: emailRef.current.value
        }

        history.goForward()
        console.log(formData)

        // turn object to string and put in local storage
        localStorage.setItem('test', JSON.stringify(formData))
        console.log('into string format: ', localStorage.getItem('test'))

        // turning string in local storage back to object
        setTimeout(() => {
            console.log('back to object format: ', JSON.parse(localStorage.getItem('test')))
        }, 3000)
    }

    return (  
        <form onSubmit={handleSubmit}>

                <label htmlFor="username">username:</label>
                <input 
                    id="username" 
                    ref={userNameRef}
                />

                <label htmlFor="password">password:</label>
                <input 
                    id="password" 
                    ref={passwordRef}
                    type="password"
                />

                <label htmlFor="email">email:</label>
                <input 
                    id="email" 
                    ref={emailRef}
                    type="email"
                />

                <button>Submit</button>
            </form>
    );
}
 
export default FormUncontrolFunction;