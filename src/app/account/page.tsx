import Image from 'next/image'
import { IoIosArrowForward } from 'react-icons/io'
import { LuPencilLine } from 'react-icons/lu'

import { BottomBar } from '@/components/layout'

export default function Account() {
  return (
    <div className="h-full min-h-screen w-full flex-col items-start justify-center bg-background">
      <div className="flex w-full flex-col justify-center">
        <div id="rounded" className="mx-auto mt-12">
          <Image
            src="/assets/images/Taylor-Swift.png"
            width={128}
            height={128}
            className="absolute left-[10px] top-[10px] rounded-full"
            alt="Profile"
          />
        </div>
        <div className="mx-auto mt-4 flex flex-row items-center gap-2 text-lg font-bold text-hitam">
          <p>Isnuansa Maharani</p>
          <LuPencilLine />
        </div>
        <div className="mt-8 p-6">
          <button
            type="button"
            className="flex w-full flex-row items-center justify-between border-b border-hitam-50 py-4"
          >
            <div className="flex flex-col text-start">
              <p className="text-sm font-bold text-black">Email</p>
              <p className="text-sm font-medium text-hitam-300">isnuansamaharani@gmail.com</p>
            </div>
            <IoIosArrowForward className="h-6 w-6 text-hitam-300" />
          </button>
          <button
            type="button"
            className="flex w-full flex-row items-center justify-between border-b border-hitam-50 py-4"
          >
            <div className="flex flex-col text-start">
              <p className="text-sm font-bold text-black">Phone Number</p>
              <p className="text-sm font-medium text-hitam-300">0869-9659-9865</p>
            </div>
            <IoIosArrowForward className="h-6 w-6 text-hitam-300" />
          </button>
          <button
            type="button"
            className="flex w-full flex-row items-center justify-between border-b border-hitam-50 py-4"
          >
            <div className="flex flex-col text-start">
              <p className="text-sm font-bold text-black">Password</p>
              <p className="text-sm font-medium text-hitam-300">********</p>
            </div>
            <IoIosArrowForward className="h-6 w-6 text-hitam-300" />
          </button>
          <button
            type="button"
            className="flex w-full flex-row items-center justify-between border-b border-hitam-50 py-4"
          >
            <div className="flex flex-col text-start">
              <p className="text-sm font-bold text-black">Location</p>
              <p className="text-sm font-medium text-hitam-300">Indonesia</p>
            </div>
            <IoIosArrowForward className="h-6 w-6 text-hitam-300" />
          </button>
        </div>
      </div>
      <BottomBar />
    </div>
  )
}
