import React,{useState} from 'react'
import "./index.css"
const Login = () => {
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[message,setMessage] = useState('')
    const enterName = e => {
        setName(e.target.value)
    }
    const enterEmail = e => {
        setEmail(e.target.value)
    }
    const enterMessage = e => {
        setMessage(e.target.value)
    }
    const submitForm = async e => {
        e.preventDefault();
        const userDetails = {email,message,name}
        const url = " https://admin.srkprojects.com/web/api/client/v1/contact-us/"
        const options = {
            method: 'POST',
            body: JSON.stringify(userDetails),
        }
        const response = await fetch(url,options)
        const data = await response.json()
        console.log(email)
        console.log(message)
        console.log(name)
        if (response.ok===true) {
            console.log(data)
        }
    }
  return (
    <div className="login-container">
        <h1 className="heading">LOGIN FORM</h1>
        <form onSubmit={submitForm}>
          <div className="input-container">
            <label htmlFor="email"> Email</label>
            <input onChange={enterEmail} placeholder="Enter Your Email" value={email} type="email" id="email" />
          </div>
          <div className="input-container">
            <label htmlFor="message">Message</label>
            <input onChange={enterMessage} placeholder="Enter Your Message" value={message} type="message" id="message"/>
          </div>
          <div className="input-container">
            <label htmlFor="name">Name</label>
            <input onChange={enterName} placeholder="Enter Your Name" value={name} type="name" id="name"/>
          </div>
          <button className="login-button" type="submit">Login</button>
        </form>
     
    </div>
  )
}

export default Login