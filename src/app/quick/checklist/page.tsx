'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Dispatch, SetStateAction, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
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

function AddModal({ setAddModal }: { setAddModal: Dispatch<SetStateAction<boolean>> }) {
  const [categories, setCategories] = useState(false)
  const [selectCategories, setSelectCategories] = useState('Select Category')
  return (
    <div className="absolute z-50 h-full w-full bg-hitam bg-opacity-20">
      <div className="absolute left-1/2 top-1/2 z-50 h-4/5 w-4/5 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-4 pt-6">
        <div className="flex flex-row items-center">
          <button type="button" onClick={() => setAddModal(false)}>
            <IoIosArrowBack className="h-6 w-6 text-hitam" />
          </button>{' '}
          <p className="mx-auto w-full grow self-center text-center text-xl font-bold text-hitam">
            Add New Task
          </p>
        </div>
        <div className="mt-3 flex w-full flex-col">
          <p className="text-sm font-medium text-hitam-300">Name</p>
          <input
            type="text"
            className="mt-2 h-12 rounded-lg border border-hitam-300 px-5 text-base font-medium text-hitam-300"
            placeholder="Enter Task Name"
          />
        </div>
        <div className="mt-3 flex w-full flex-col">
          <p className="text-sm font-medium text-hitam-300">Note</p>
          <input
            type="text"
            className="mt-2 h-12 rounded-lg border border-hitam-300 px-5 text-base font-medium text-hitam-300"
            placeholder="Add Note"
          />
        </div>
        <div className="relative w-full">
          <div className="mt-3 flex w-full flex-col">
            <p className="text-sm font-medium text-hitam-300">Categories</p>
            <button
              onClick={() => setCategories(!categories)}
              type="button"
              className="mt-2 flex h-12 items-center justify-center rounded-lg border border-hitam-300 px-5 text-start text-base font-medium text-hitam-300"
            >
              <div className="flex w-full flex-row items-center justify-between">
                <p>{selectCategories}</p>
                <IoIosArrowBack className="-rotate-90 text-hitam-300" />
              </div>
            </button>
          </div>
          {categories && (
            <button
              type="button"
              onClick={() => setCategories(!categories)}
              className="absolute flex h-40 w-full flex-col overflow-y-scroll overscroll-none rounded-lg border border-hitam-300 bg-white p-3 text-start"
            >
              <button
                onClick={() => setSelectCategories('Completed')}
                type="button"
                className="w-full border-b p-2 text-start"
              >
                <p className=" text-base text-hitam-300">Completed</p>
              </button>
              <button
                onClick={() => setSelectCategories('Pending')}
                type="button"
                className="w-full border-b p-2 text-start"
              >
                <p className="text-base text-hitam-300">Pending</p>
              </button>
              <button
                onClick={() => setSelectCategories('On Going')}
                type="button"
                className="w-full border-b p-2 text-start"
              >
                <p className="text-base text-hitam-300">On Going</p>
              </button>
              <button
                onClick={() => setSelectCategories('All Task')}
                type="button"
                className="w-full border-b p-2 text-start"
              >
                <p className="text-base text-hitam-300">All Task</p>
              </button>
            </button>
          )}
        </div>

        <div className="mt-3 flex w-full flex-col">
          <p className="text-sm font-medium text-hitam-300">Task Owner</p>
          <input
            type="text"
            className="mt-2 h-12 rounded-lg border border-hitam-300 px-5 text-base font-medium text-hitam-300"
            placeholder="Select a Person"
          />
        </div>
        <div className="mt-3 flex w-full flex-col">
          <p className="text-sm font-medium text-hitam-300">Deadline</p>
          <input
            type="text"
            className="mt-2 h-12 rounded-lg border border-hitam-300 px-5 text-base font-medium text-hitam-300"
            placeholder="DD/MM/YYY"
          />
        </div>
        <div className="mt-3 flex w-full flex-col">
          <p className="text-sm font-medium text-hitam-300">Image</p>
          <input
            type="text"
            className="mt-2 h-28 rounded-lg border border-dashed border-hitam-300 px-5 text-base font-medium text-hitam-300"
            placeholder="Insert Image"
          />
        </div>
      </div>
    </div>
  )
}

function EditModal({ setEditModal }: { setEditModal: Dispatch<SetStateAction<boolean>> }) {
  return (
    <div className="absolute z-50 h-full w-full bg-hitam bg-opacity-20">
      <div className="absolute left-1/2 top-1/2 z-50 w-4/5 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-4 pt-6">
        <div className="flex flex-row items-center">
          <button type="button" onClick={() => setEditModal(false)}>
            <IoIosArrowBack className="h-6 w-6 text-hitam" />
          </button>{' '}
          <p className="mx-auto w-full grow self-center text-center text-xl font-bold text-hitam">
            NameTask 1
          </p>
        </div>
        <div className="mt-2 flex flex-col px-2">
          <div className="flex justify-center border-b border-hitam-300 p-4 text-center text-base font-bold text-hitam">
            Edit Tasks
          </div>
          <div className="flex justify-center border-b border-hitam-300 p-4 text-center text-base font-bold text-hitam">
            Change Status
          </div>
          <div className="flex justify-center p-4 text-center text-base font-bold text-secondary">
            Edit Tasks
          </div>
        </div>
      </div>
    </div>
  )
}

function TaskDropDown({ status, data }: { status: string; data: any[] }) {
  const [show, setShow] = useState(false)
  const toggleShow = () => setShow(!show)
  return (
    <div className="mt-4 flex flex-col">
      <button onClick={toggleShow} type="button" className="flex flex-col">
        <div className="flex w-full flex-row justify-between">
          <p className="text-sm font-medium text-hitam-300">{status}</p>
          <IoIosArrowBack className="-rotate-90 text-hitam-300" />
        </div>
        <div className="mt-3 h-[1px] w-full bg-hitam-50" />
      </button>
      {show &&
        data.map((item) => (
          <button key={item.key} type="button" className="mt-3 h-full w-full text-start">
            <div key={item.key} className="mt-3 flex flex-row gap-4">
              <div className="relative flex w-1/3 rounded-lg border border-hitam-50">
                <div className="absolute left-2 top-2 flex h-6 flex-row items-center gap-1 rounded-lg bg-tertiary-400 px-2 py-1">
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
          </button>
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

  const [addModal, setAddModal] = useState(false)
  const [editModal, setEditModal] = useState(true)

  return (
    <div className="min-h-[100vh] w-full bg-background">
      {editModal && <EditModal setEditModal={setEditModal} />}
      {addModal && <AddModal setAddModal={setAddModal} />}
      <div className="flex flex-col p-6 pb-28">
        <div className="mb-2 flex flex-row items-center justify-between">
          <Link href="/home">
            <IoIosArrowBack className="h-6 w-6 text-hitam" />
          </Link>
          <h2 className="text-lg font-bold text-hitam">Checklist</h2>
          <div className="flex flex-row items-center gap-2">
            <button type="button" onClick={() => setAddModal(true)}>
              <AiOutlinePlus className="h-6 w-6 text-hitam" />
            </button>
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
