import React from 'react'
import { Link } from 'react-router-dom'
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserPool
} from 'amazon-cognito-identity-js'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import logo from '../../images/logoImages/Group 4.svg'
import image1 from '../../images/logoImages/image 1.png'
import image2 from '../../images/logoImages/Vector.png'
import image3 from '../../images/logoImages/Vector2.png'
const userPool = new CognitoUserPool({
  UserPoolId: 'us-east-1_O8gA5ZaTv',
  ClientId: '1n1jgrn82911jh6131beunqjdi'
})
export default function SignIn() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (values) => {
    const cognitoUser = new CognitoUser({
      Username: values.email,
      Pool: userPool
    })

    const authenticationDetails = new AuthenticationDetails({
      Username: values.email,
      Password: values.password
    })

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        console.log(result)
        cognitoUser.getUserAttributes(function (err, result) {
          if (err) {
            console.log('err', err)
            return
          }
          //   dispatch(
          //     updateData({
          //       name: result[2].Value,
          //       email: values.email,
          //     })
          //   );
          navigate('/dashboard')
        })
      },
      onFailure: (err) => {
        console.log('login failed', err)
      }
    })
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col w-[400px] h-[500px] bg-[#FFFFFF] rounded-md  items-center px-14">
        <div className="p-5  w-full flex justify-center mb-7 mt-2">
          <img className="cursor-pointer w-[200px]" src={logo} alt="" />
        </div>
        <div className=" flex w-full mb-6">
          <h2 className="text-black font-bold text-lg ">
            Sign into <br /> your account
          </h2>
        </div>
        <div className="flex flex-col w-full ">
          <label className="text-black font-normal text-xs  pb-1">
            Email or Username
          </label>
          <input
            type="text"
            className="w-[255px] bg-[#DCDCDC] outline-none rounded mb-3 focus:text-black  "
            onChange={(evt) => setEmail(evt.target.value)}
          />
          <label className="text-black font-normal text-xs  pb-1">
            Password
          </label>
          <input
            type="password"
            className="w-[255px] bg-[#DCDCDC] outline-none rounded mb-2 focus:text-black"
            onChange={(evt) => setPassword(evt.target.value)}
          />
          <div className="flex items-center mb-3">
            <input
              type="checkbox"
              id="remember"
              value={'remember'}
              className="mr-2 w-[11px] "
            />
            <label for="remember" className="text-black text-[9px] font-normal">
              Remember Me
            </label>
          </div>
          <div className="flex flex-col justify-center items-center mb-3">
            <h3 className="text-black text-[9px] font-normal">
              Or Sign In With
            </h3>
            <div className="flex py-3">
              <img className="cursor-pointer pr-9" src={image1} />
              <img className="cursor-pointer pr-9" src={image2} />
              <img className="cursor-pointer" src={image3} />
            </div>
          </div>
          <div className="w-full">
            <button
              onClick={() => {
                handleSubmit({ email, password })
              }}
              className="bg-[#2E8544] text-[9px] p-2 w-full rounded font-bold text-white"
            >
              Sign in
            </button>
          </div>
          <div className="w-full flex justify-center my-1">
            <h3 className="text-black text-[9px] font-normal"> Or </h3>
          </div>
          <div className="w-full">
            <Link to="/SignUp">
              <button className="bg-[#DCDCDC] text-black text-[9px] p-2 w-full rounded font-bold">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
