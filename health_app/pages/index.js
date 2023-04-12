import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Button } from 'react-bootstrap'
import { useAuth } from '@/context/authContext'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const router = useRouter()

  const {logout, user} = useAuth()
  console.log(user)

  useEffect(() => {
    if(!user) {
      console.log("No User")
    }
  }, [user])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome { user ? user.email : null }</h1>
      <Link href="/login">Login</Link>
      <Button onClick={() => {
        logout()
        router.push("/login")
      }}>H</Button>
      <Link href="/sign_up">Sign Up</Link>
    </main>
  )
}
