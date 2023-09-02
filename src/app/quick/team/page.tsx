'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Dispatch, SetStateAction, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { GrFormClose } from 'react-icons/gr'
import { IoIosArrowBack } from 'react-icons/io'
import { IoSettingsOutline } from 'react-icons/io5'

import { Button } from '@/components/element'
import { BottomBar } from '@/components/layout'

function AddTeamModal({ setAddTeam }: { setAddTeam: Dispatch<SetStateAction<boolean>> }) {
  return (
    <div className="absolute z-50 flex h-full w-full items-center justify-center bg-hitam bg-opacity-20">
      <div className="relative flex w-4/5 flex-col justify-center rounded-lg bg-white">
        <button type="button" onClick={() => setAddTeam(false)}>
          <GrFormClose className="absolute right-4 top-4 h-6 w-6 text-hitam" />
        </button>
        <div className="flex w-full flex-col p-4">
          <div className="flex w-full justify-center">
            <Image
              src="/assets/images/quick/team/invite.svg"
              alt="Invite"
              width={0}
              height={0}
              className="flex w-3/5 object-contain"
            />
          </div>
          <p className="mt-8 text-center text-2xl font-black text-primary">Invite Helper</p>
          <p className="text-center text-sm font-medium text-hitam-700">
            Share this code with friend and prepare for the event together
          </p>
          <div className="mt-4 w-full rounded-lg bg-primary-50 p-3">
            <p className="text-center text-3xl font-bold uppercase text-primary">3MAN980L3H</p>
          </div>
          <div className="mt-4 flex flex-row gap-4">
            <button
              type="button"
              className="w-1/2 rounded-lg border border-hitam-50 p-3 text-base font-medium text-hitam"
            >
              Copy
            </button>
            <div className="w-1/2">
              <Button>Share</Button>
            </div>
          </div>
        </div>
        <div className="relative mt-6 w-full border-b border-hitam-50">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2">
            <p className="text-base font-medium text-hitam">or scan QR Code</p>
          </div>
        </div>
        <div className="mx-auto mb-8 mt-7 flex aspect-square w-[45%] justify-center bg-black">
          Ini Gambar
        </div>
      </div>
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

  const [addTeam, setAddTeam] = useState(true)

  return (
    <div className="bg-background min-h-[100vh] w-full ">
      {addTeam && <AddTeamModal setAddTeam={setAddTeam} />}
      <div className="flex flex-col p-6 pb-28">
        <div className="mb-2 flex flex-row items-center justify-between">
          <Link href="/home">
            <IoIosArrowBack className="h-6 w-6 text-hitam" />
          </Link>
          <h2 className="text-lg font-bold text-hitam">Team</h2>
          <div className="flex flex-row items-center gap-2">
            <button type="button" onClick={() => setAddTeam(true)}>
              <AiOutlinePlus className="h-6 w-6 text-hitam" />
            </button>
            <IoSettingsOutline className="h-6 w-6 text-hitam" />
          </div>
        </div>
        <div className="mt-2 flex flex-col">
          <div className="flex flex-row border-b border-hitam-50 p-4">
            <div className=" relative mr-3 h-10 w-10 rounded-full">
              <Image
                src="/assets/images/Taylor-Swift.png"
                alt="Team"
                className="rounded-full"
                fill
              />
            </div>
            <div className="flex w-1/5 grow flex-col">
              <p className=" text-sm font-bold text-hitam">Padhang Satrio</p>
              <p className="text-xs font-medium text-hitam-600">padhangsatrio@gmail.com</p>
            </div>
            <div className="items-start text-start">
              <p className="text-xs font-medium text-hitam-600">Owner</p>
            </div>
          </div>
        </div>
      </div>
      <BottomBar />
    </div>
  )
}
