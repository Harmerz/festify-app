import Link from 'next/link'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

import { BottomBar } from '@/components/layout'

function SortIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M10 14H2M8 10H2M6 6H2M12 18H2M19 20V4M19 20L22 17M19 20L16 17M19 4L22 7M19 4L16 7"
        stroke="#111111"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Result() {
  return (
    <div className="min-h-[100vh] w-full bg-background ">
      <div className="flex flex-col pb-20 pt-6">
        <div className="mb-2 flex flex-row items-center justify-between px-6">
          <Link href="/home">
            <IoIosArrowBack className="h-6 w-6 text-hitam" />
          </Link>
          <h2 className="text-lg font-bold text-hitam">Setting</h2>
          <div className="flex flex-row items-center gap-2">
            <SortIcon />
          </div>
        </div>
        <div className="flex flex-col p-6">
          <h5 className="text-xs font-medium text-hitam-300">General Setting</h5>
          <button
            className="flex flex-row justify-between border-b border-hitam-50 py-4"
            type="button"
          >
            <p className="text-base font-bold text-hitam">Change Profile</p>
            <IoIosArrowForward className="h-6 w-6 text-hitam-300" />
          </button>
          <button
            className="flex flex-row justify-between border-b border-hitam-50 py-4"
            type="button"
          >
            <p className="text-base font-bold text-hitam">Change Password</p>
            <IoIosArrowForward className="h-6 w-6 text-hitam-300" />
          </button>
          <button
            className="flex flex-row justify-between border-b border-hitam-50 py-4"
            type="button"
          >
            <p className="text-base font-bold text-hitam">Change Language</p>
            <IoIosArrowForward className="h-6 w-6 text-hitam-300" />
          </button>
          <h5 className="mt-10 text-xs font-medium text-hitam-300">Information</h5>
          <button
            className="flex flex-row justify-between border-b border-hitam-50 py-4"
            type="button"
          >
            <p className="text-base font-bold text-hitam">Change Account</p>
            <IoIosArrowForward className="h-6 w-6 text-hitam-300" />
          </button>
          <button
            className="flex flex-row justify-between border-b border-hitam-50 py-4"
            type="button"
          >
            <p className="text-base font-bold text-hitam">Logout</p>
            <IoIosArrowForward className="h-6 w-6 text-hitam-300" />
          </button>
        </div>
      </div>
      <BottomBar />
    </div>
  )
}
