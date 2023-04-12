import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useAuth } from '../context/authContext'



const sign_up = () => {
  const router = useRouter()
  const { user, signup } = useAuth()
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleSignUp = async (e) => {
    e.preventDefault()

    console.log(user)
    try {
      await signup(data.email, data.password)
      router.push('/login')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <h1 className="text-center my-3 ">Login</h1>
      <Form onSubmit={handleSignUp}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            value={data.email}
            required
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            value={data.password}
            required
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign up
        </Button>
      </Form>
    </div>
  )
}

export default sign_up
