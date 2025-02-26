import React from 'react'
import { iAuth } from '../interfaces/auth.interface'
import AuthForm from '../components/forms/AuthForm'
import $axios from '../http'

const Register:React.FC = () => {
    const OnSubmit = async (formData: iAuth) => {
        try{
          const res = await $axios.post('/registration', { ...formData })
            console.log(res.data)
        } catch (err){
        console.log(err)
        }
    }
  return  <AuthForm type="register" onSubmit = {OnSubmit}/>
}

export default Register
