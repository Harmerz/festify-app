'use client'

import axios from 'axios'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function Page() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isHidePassword, setIsHidePassword] = useState(true)
  const [isRememberMe, setIsRememberMe] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/home'

  const router = useRouter()

  const onSubmit = async (e: any) => {
    e.preventDefault()
    try {
      setLoading(true)

      await axios.post('/auth/signup', {
        name,
        email,
        password,
      })

      setIsSubmitted(true)
      router.push('/auth/signin')
    } catch (err) {
      setLoading(false)
      setError(err as string)
    }
  }

  return (
    <div className="flex h-full min-h-screen w-full flex-col items-start justify-center bg-white p-6 py-3">
      <div className="flex w-full justify-center self-start">
        <Image
          src="/assets/logo.svg"
          className="flex justify-center text-center"
          width={40}
          height={32}
          alt="logo"
        />
      </div>
      <div className="mt-16 h-full w-full">
        <div className="flex flex-col justify-center text-center">
          <h2 className=" text-center text-4xl font-black text-primary">
            Let&apos;s mastermind your fancy event
          </h2>
          <h2 className="text-center text-4xl font-black text-secondary">effortlessly!</h2>
        </div>
        <div className="mt-4 w-full">
          <p className="text-center text-base text-hitam-700">
            Let&apos;s begin with authorize your account first!
          </p>
        </div>
        <form className="w-full" onSubmit={(e) => onSubmit(e)}>
          <div className="mt-6">
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
              className="block h-16 w-full rounded-lg border border-hitam-50 bg-white px-5 text-black "
              placeholder="Enter your Name"
              required
            />
          </div>
          <div className="mt-6">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              className="block h-16 w-full rounded-lg border border-hitam-50 bg-white px-5 text-black "
              placeholder="Enter your Email"
              required
            />
          </div>
          <div className="mt-4">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              className="block h-16 w-full rounded-lg border border-hitam-50 bg-white px-5 text-black "
              placeholder="Enter your Password"
              required
            />
          </div>
          <div className="mt-4">
            <input
              type="password"
              id="password"
              className="block h-16 w-full rounded-lg border border-hitam-50 bg-white px-5 text-black "
              placeholder="Confirm your Password"
              required
            />
          </div>
          <div className="mt-4 flex items-start">
            <div className="flex h-5 items-center">
              <label htmlFor="remember" className="ml-2 text-sm font-medium text-black">
                <input id="remember" type="checkbox" value="" className="mr-2 text-black" />
                Remember me
              </label>
            </div>
          </div>
          <button
            type="submit"
            className={`mt-4 h-16 w-full rounded-lg bg-primary text-base text-white ${
              loading ? 'bg-primary-600' : ''
            }`}
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}
