'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useState } from 'react'

import { Button } from '@/components/element'

export default function OnboardingPage() {
  const { data: session } = useSession()

  console.log(session)
  const data = [
    {
      title: 'Manage your expenses',
      description:
        'Create a budget management, add control expenses, choose vendors, and do payment.',
    },
    {
      title: 'Pick out vendors',
      description:
        "Select vendors from multiple categories around your area that fits your budget allocation, event's theme, and needs. No more fake testimonial because you can access other users' review here!",
    },
    {
      title: 'Chat feature',
      description:
        'Chat with your selected vendor to make a deal about the prices as well as discussing which items that fits your need.',
    },
    {
      title: 'Invite your friends',
      description: 'Sync all data across devices and plan your event with friends.',
    },
  ]
  const [onboarding, setOnboarding] = useState(0)
  return (
    <div className="flex h-screen w-full flex-col items-start justify-center bg-white py-3">
      <div className="flex w-full justify-center">
        <Image
          src="/assets/logo.svg"
          className="flex justify-center text-center"
          width={40}
          height={32}
          alt="logo"
        />
      </div>
      <div className="flex h-4/5 w-full flex-col items-center justify-center">
        <div className="h-full max-h-52 w-full px-10">
          <div className="relative flex h-full max-h-52 w-full px-10">
            <Image
              src={`/assets/images/onboarding/onboarding (${onboarding + 1}).svg`}
              className="object-contain transition-all"
              fill
              alt={`onboarding ${onboarding}`}
            />
          </div>
        </div>
        <div className="mx-6 mt-16 flex flex-col gap-4">
          <h2 className="text-4xl font-bold text-primary-900 transition-all">
            {data[onboarding].title}
          </h2>
          <h2 className="text-base text-hitam-700 transition-all">
            {data[onboarding].description}
          </h2>
        </div>
      </div>
      <div className="flex w-full flex-row items-center justify-between px-7">
        <div className="flex flex-row gap-1">
          <div
            className={`h-2 rounded-full transition-all ${
              onboarding === 0 ? 'w-8 bg-primary' : 'w-2 bg-hitam-100'
            }`}
          />
          <div
            className={`h-2 rounded-full transition-all ${
              onboarding === 1 ? 'w-8 bg-primary' : 'w-2 bg-hitam-100'
            }`}
          />
          <div
            className={`h-2 rounded-full transition-all ${
              onboarding === 2 ? 'w-8 bg-primary' : 'w-2 bg-hitam-100'
            }`}
          />
          <div
            className={`h-2 rounded-full transition-all ${
              onboarding === 3 ? 'w-8 bg-primary' : 'w-2 bg-hitam-100'
            }`}
          />
        </div>
        {onboarding === 3 ? (
          <Link href="/home" className="w-40">
            <Button>Get Started!</Button>
          </Link>
        ) : (
          <div className="w-40">
            <Button onClick={() => [setOnboarding(onboarding < 3 ? onboarding + 1 : onboarding)]}>
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
