import Image from 'next/image'
import Link from 'next/link'
import { FiSearch } from 'react-icons/fi'
import { IoIosArrowBack } from 'react-icons/io'

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
          <h2 className="text-lg font-bold text-hitam">Checklist</h2>
          <div className="flex flex-row items-center gap-2">
            <SortIcon />
          </div>
        </div>
        <div className="relative mb-6 mt-4 flex h-full w-full grow">
          <FiSearch className="my-aut2 absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-hitam-50" />
          <input
            type="text"
            placeholder="Search"
            className="h-10 w-full rounded-lg border border-hitam-50 px-4 pl-8 text-xs text-black focus:border-0"
          />
        </div>
        <div className="flex flex-col">
          {data.map((item) => (
            <>
              <Link href="/quick/pro-tips/blog">
                <div key={item.title} className="flex flex-row gap-4">
                  <div className="relative aspect-[3/2] w-1/3 rounded-lg">
                    <Image
                      src={`/assets/images/quick/protips/${item.pict}.png`}
                      alt={item.pict}
                      fill
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col py-[10.5px]">
                    <h1 className="w-4/5 text-base font-bold text-hitam">{item.title}</h1>
                    <h2 className="text-[11px] font-medium text-hitam-300">{item.title}</h2>
                  </div>
                </div>
              </Link>
              <div className="my-3 h-[1px] w-full bg-hitam-50" />
            </>
          ))}
        </div>
      </div>
      <BottomBar />
    </div>
  )
}
