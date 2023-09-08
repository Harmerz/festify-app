import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowBack } from 'react-icons/io'

import { BottomBar } from '@/components/layout'

export default function ProTips() {
  const data = [
    {
      pict: 'protips (1)',
      title: 'Infografis lorem ipsum dolor sit amet 1',
      date: '29 Juli 2023',
    },
    {
      pict: 'protips (2)',
      title: 'Infografis lorem ipsum dolor sit amet 2',
      date: '29 Juli 2023',
    },
    {
      pict: 'protips (3)',
      title: 'Infografis lorem ipsum dolor sit amet3',
      date: '29 Juli 2023',
    },
    {
      pict: 'protips (4)',
      title: 'Infografis lorem ipsum dolor sit amet 4',
      date: '29 Juli 2023',
    },
    {
      pict: 'protips (5)',
      title: 'Infografis lorem ipsum dolor sit amet5',
      date: '29 Juli 2023',
    },
    {
      pict: 'protips (2)',
      title: 'Infografis lorem ipsum dolor sit amet 6',
      date: '29 Juli 2023',
    },
    {
      pict: 'protips (5)',
      title: 'Infografis lorem ipsum dolor sit amet 7',
      date: '29 Juli 2023',
    },
    {
      pict: 'protips (4)',
      title: 'Infografis lorem ipsum dolor sit amet 8',
      date: '29 Juli 2023',
    },
  ]
  return (
    <div className="h-full min-h-screen w-full bg-white">
      <div className="flex flex-col p-6">
        <div className="mb-2 flex flex-row items-center justify-between">
          <Link href="/home">
            <IoIosArrowBack className="h-6 w-6 text-hitam" />
          </Link>
          <div className="flex w-full justify-center text-center">
            <h2 className="w-3/5 text-center text-lg font-bold text-hitam">{data[0].title}</h2>
          </div>
        </div>
        <Image
          src="/assets/images/quick/protips/protips (1).png"
          width={0}
          height={0}
          className="mt-4 aspect-auto h-auto w-full rounded-lg object-contain"
          alt="protips"
          sizes="100vw"
        />
        <div className="mt-4 flex flex-row gap-10">
          <div className="flex flex-col gap-1">
            <p className="text-xs font-medium text-hitam-300">Release Date</p>
            <p className="text-xs font-medium text-hitam">Juli 29, 2023</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs font-medium text-hitam-300">Release Date</p>
            <p className="text-xs font-medium text-hitam">Juli 29, 2023</p>
          </div>
        </div>
        <div className="my-4 flex h-[1px] w-full bg-hitam-50" />
        <div className="flex flex-col">
          <p className="text-sm font-bold text-hitam">Enchanting flower rain wedding</p>
          <p className="mt-2 text-xs font-medium text-hitam-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
      </div>
      <BottomBar />
    </div>
  )
}
