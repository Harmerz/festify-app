'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { IoIosArrowBack } from 'react-icons/io'

import { BottomBar } from '@/components/layout'

function SortIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M10 14H2M8 10H2M6 6H2M12 18H2M19 20V4M19 20L22 17M19 20L16 17M19 4L22 7M19 4L16 7"
        stroke="#111111"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

function TaskDropDown({ status, data }: { status: string; data: any[] }) {
  const [show, setShow] = useState(false)
  const toggleShow = () => setShow(!show)
  return (
    <div className="mt-4 flex flex-col">
      <button onClick={toggleShow} type="button" className="flex flex-col">
        <div className="flex flex-row justify-between">
          <p className="text-sm font-medium text-hitam-300">{status}</p>
          <IoIosArrowBack className="-rotate-90 text-hitam-300" />
        </div>
        <div className="mt-3 h-[1px] w-full bg-hitam-50" />
      </button>
      {show &&
        data.map((item) => (
          <div key={item.key} className="mt-3 flex flex-row gap-4">
            <div className="relative flex w-1/3 rounded-lg border border-hitam-50">
              <div className="absolute left-2 top-2 flex h-6 w-[90px] flex-row items-center gap-1 rounded-lg bg-tertiary-400 px-2 py-1">
                <div className="flex h-[6px] w-[6px] rounded-full bg-primary" />
                <p className="text-[11px] font-medium text-hitam">{status}</p>
              </div>
              <Image
                src="/assets/images/home/calendar.svg"
                alt="calendar"
                className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
                width={30}
                height={30}
              />
              <div className="absolute left-1/2 top-1/2 z-0 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-tertiary-50" />
            </div>
            <div className="flex w-2/3 flex-col">
              <p className="mb-1 text-base font-bold text-hitam">{item.title}</p>
              <div className="grid grid-cols-2 gap-x-3 gap-y-1">
                <div className="flex flex-col">
                  <p className="text-[11px] font-medium text-hitam-300">Categories</p>
                  <p className="text-xs font-medium text-hitam-700">Name</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-[11px] font-medium text-hitam-300">Categories</p>
                  <p className="text-xs font-medium text-hitam-700">Name</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-[11px] font-medium text-hitam-300">Categories</p>
                  <p className="text-xs font-medium text-hitam-700">Name</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-[11px] font-medium text-hitam-300">Categories</p>
                  <p className="text-xs font-medium text-hitam-700">Name</p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default function CheckList() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState([
    {
      title: 'Task Name Apalah 1',
      categories: 'Decoration and Photobooth',
      note: 'Ini Notes',
      deadline: '1 September 2023',
      owner: 'Lorem Ipsum',
      key: 1,
    },
    {
      title: 'Task Name Apalah 2',
      categories: 'Decoration and Photobooth',
      note: 'Ini Notes',
      deadline: '1 September 2023',
      owner: 'Lorem Ipsum',
      key: 2,
    },
  ])

  return (
    <div className="bg-background min-h-[100vh] w-full">
      <div className="flex flex-col p-6 pb-28">
        <div className="mb-2 flex flex-row items-center justify-between">
          <Link href="/home">
            <IoIosArrowBack className="text-hitam" />
          </Link>
          <h2 className="text-lg font-bold text-hitam">Checklist</h2>
          <div className="flex flex-row items-center gap-2">
            <AiOutlinePlus className="text-hitam" />
            <SortIcon />
          </div>
        </div>
        <TaskDropDown data={data} status="Completed" />
        <TaskDropDown data={data} status="Pending" />
        <TaskDropDown data={data} status="On Going" />
        <TaskDropDown data={data} status="All Task" />
      </div>
      <BottomBar />
    </div>
  )
}
