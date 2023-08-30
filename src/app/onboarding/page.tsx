'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function OnboardingPage() {
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
    <div className="w-full flex flex-col justify-center py-3 h-screen items-start bg-white">
      <div className="flex justify-center w-full">
        <Image
          src="/assets/logo.svg"
          className="flex justify-center text-center"
          width={40}
          height={32}
          alt="logo"
        />
      </div>
      <div className="w-full h-4/5 justify-center items-center flex flex-col">
        <div className="w-full px-10 h-full max-h-52">
          <div className="relative px-10 w-full h-full flex max-h-52">
            <Image
              src={`/assets/images/onboarding/onboarding (${onboarding + 1}).svg`}
              className="object-contain"
              fill
              alt={`onboarding ${onboarding}`}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-16 mx-6">
          <h2 className="text-4xl font-bold text-primary-900">{data[onboarding].title}</h2>
          <h2 className="text-base text-hitam-700">{data[onboarding].description}</h2>
        </div>
      </div>
      <div className="flex flex-row items-center px-7 justify-between w-full">
        <div className="flex flex-row gap-1">
          <div
            className={`h-2 rounded-full ${
              onboarding === 0 ? 'bg-primary w-8' : 'bg-hitam-100 w-2'
            }`}
          />
          <div
            className={`h-2 rounded-full ${
              onboarding === 1 ? 'bg-primary w-8' : 'bg-hitam-100 w-2'
            }`}
          />
          <div
            className={`h-2 rounded-full ${
              onboarding === 2 ? 'bg-primary w-8' : 'bg-hitam-100 w-2'
            }`}
          />
          <div
            className={`h-2 rounded-full ${
              onboarding === 3 ? 'bg-primary w-8' : 'bg-hitam-100 w-2'
            }`}
          />
        </div>
        <button
          type="button"
          className="bg-primary py-3 w-40 rounded text-white text-base"
          onClick={() => setOnboarding(onboarding < 4 ? onboarding + 1 : onboarding)}
        >
          Next
        </button>
      </div>
    </div>
  )
}
