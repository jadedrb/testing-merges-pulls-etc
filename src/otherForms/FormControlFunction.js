import React, { useState } from 'react';

const FormControlFunction = () => {

    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')
    let [email, setEmail] = useState('')

    const handleChange = e => {
        let { value, id } = e.target
        
        if (id === 'username') setUsername(value)
        else if (id === 'password') setPassword(value)
        else if (id === 'email') setEmail(value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log('form data: ', { username, password, email })
        resetForm()
    }
    
    const resetForm = () => {
        setPassword('')
        setEmail('')
        setUsername('')
    }

    return (  
        <form onSubmit={handleSubmit}>

                <label htmlFor="username">username:</label>
                <input 
                    id="username" 
                    onChange={handleChange}
                    value={username}
                />

                <label htmlFor="password">password:</label>
                <input 
                    id="password" 
                    onChange={handleChange}
                    value={password} 
                    type="password"
                />

                <label htmlFor="email">email:</label>
                <input 
                    id="email" 
                    onChange={handleChange} 
                    value={email}
                    type="email"
                />

                <button>Submit</button>

        </form>
    );
}
 
export default FormControlFunction;