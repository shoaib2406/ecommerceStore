import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { userAction } from '../../store/user'
import Form from '../UI/Form';
import FormField from '../UI/FormField';
import './signup.css';


export default function Signup() {
    const [FullName, setFullname] = useState()
    const [username, setUsername] = useState()
    const [Email, setEmail] = useState()
    const [password, setpassword] = useState()
    const [confirmPassword, setconfirmPassword] = useState()
    const dispatch = useDispatch()

    function signupHandler() {
        dispatch(userAction.Adduser({FullName,username,Email,password,confirmPassword,}))
    }
    return (
        <Form>
            <div className="col-lg-6">
                <div className="card2 card border-0 px-4 py-5 my-5 ml-5">
                    <h1 className="text-primary"> Signup</h1>
                    <FormField name="Fullname" type="text" stateFunction={setFullname} placeholder="Enter a Full name"/>
                    <FormField name="Username" type="text" stateFunction={setUsername} placeholder="Enter a valid username"/>
                    <FormField name="Email Address" type="text" stateFunction={setEmail} placeholder="Enter EMAIL"/>
                    <FormField name="Password" type="text" stateFunction={setpassword} placeholder="Enter a Password"/>
                    <FormField name="ConfirmPassword" type="text" stateFunction={setconfirmPassword} placeholder="Confirm Password"/>        
                    <div className="row mb-3 px-3"> 
                    <button type="submit" className="btn btn-blue text-center" onClick={ signupHandler} >signup</button> 
                    </div>
                    <div className="row mb-3 px-3"> 
                    <NavLink to='./login'><h5 className="mb-5 text-sm text-success" >Already have acoount... Login?</h5></NavLink> 
                    </div>
                    </div>
                                        
            </div>
        </Form>
    )
}