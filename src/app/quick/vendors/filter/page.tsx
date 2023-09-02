'use client'

/* eslint-disable jsx-a11y/control-has-associated-label */
import Link from 'next/link'
import { Dispatch, SetStateAction, useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'

function PriceRange({
  minimum,
  setMinimum,
  maximum,
  setMaximum,
}: {
  minimum: number
  maximum: number
  setMinimum: Dispatch<SetStateAction<number>>
  setMaximum: Dispatch<SetStateAction<number>>
}) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between">
        <p className="text-sm font-medium text-black">Price Range (IDR)</p>
        <div className="flex flex-row gap-2">
          <p className="text-xs font-bold text-primary">10-25 JT</p>
          <IoIosArrowBack className="h-4 w-4 rotate-90 text-black" />
        </div>
      </div>
      <div className="mt-3 flex w-full flex-row items-center text-black">
        <input
          type="number"
          placeholder="MINIMUM (IDR)"
          value={minimum}
          onChange={(e) => setMinimum(Number(e.target.value))}
          className="h-10 w-2/5 grow rounded-lg border border-hitam-50 px-4"
        />
        <p className="mx-3 text-sm font-medium text-black">-</p>
        <input
          type="number"
          placeholder="MAXIMUM (IDR)"
          value={maximum}
          step="1000"
          onChange={(e) => setMaximum(Number(e.target.value))}
          className="h-10 w-2/5 grow rounded-lg border border-hitam-50 px-4"
        />
      </div>
      <div className="mt-3 flex flex-row gap-3">
        <button
          type="button"
          onClick={() => [setMinimum(0), setMaximum(10000000)]}
          className="flex w-1/4 grow items-center justify-center rounded-lg border border-hitam-50 py-3 text-sm text-hitam"
        >
          {'<10JT'}
        </button>
        <button
          type="button"
          onClick={() => [setMinimum(10000000), setMaximum(25000000)]}
          className="flex w-1/4 grow items-center justify-center rounded-lg border border-hitam-50 py-3 text-sm text-hitam"
        >
          10-25 JT
        </button>
        <button
          type="button"
          className="flex w-1/4 grow items-center justify-center rounded-lg border border-hitam-50 py-3 text-sm text-hitam"
          onClick={() => [setMinimum(25000000), setMaximum(250000000)]}
        >
          {'>25JT'}
        </button>
      </div>
    </div>
  )
}

function Category() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between">
        <p className="text-sm font-medium text-black">Event Category</p>
        <div className="flex flex-row gap-2">
          <p className="text-xs font-bold text-primary">Formal Meet</p>
          <IoIosArrowBack className="h-4 w-4 rotate-90 text-black" />
        </div>
      </div>
      <div className="mt-3 grid w-full grid-cols-3 gap-3">
        <button
          type="button"
          className="flex w-full grow items-center justify-center rounded-lg border border-hitam-50 py-3 text-sm text-hitam"
        >
          Launcing
        </button>
        <button
          type="button"
          className="flex w-full grow items-center justify-center rounded-lg border border-hitam-50 py-3 text-sm text-hitam"
        >
          Gathering
        </button>
        <button
          type="button"
          className="flex w-full grow items-center justify-center rounded-lg border border-hitam-50 py-3 text-sm text-hitam"
        >
          Wedding
        </button>
        <button
          type="button"
          className="flex w-full grow items-center justify-center rounded-lg border border-hitam-50 py-3 text-sm text-hitam"
        >
          Formal Meet
        </button>
        <button
          type="button"
          className="flex w-full grow items-center justify-center rounded-lg border border-hitam-50 py-3 text-sm text-hitam"
        >
          Prom Night
        </button>
        <button
          type="button"
          className="flex w-full grow items-center justify-center rounded-lg border border-hitam-50 py-3 text-sm text-hitam"
        >
          Sweet 17
        </button>
      </div>
    </div>
  )
}

export default function FilterVendors() {
  const [minimum, setMinimum] = useState(0)
  const [maximum, setMaximum] = useState(0)

  return (
    <div className="flex bg-background">
      <div className="flex h-[100vh] w-full items-center justify-center bg-hitam bg-opacity-20">
        <div className="overflow-scrol relative max-h-[650px] w-11/12 max-w-[370px] rounded-2xl bg-white p-4">
          <div className="mb-2 flex flex-row items-center justify-between">
            <Link href="/quick/vendors">
              <IoIosArrowBack className="h-6 w-6 text-hitam" />
            </Link>
            <div className="flex w-full justify-center text-center">
              <h2 className="text-center text-lg font-bold text-hitam">Filter</h2>
            </div>
          </div>
          <PriceRange
            minimum={minimum}
            maximum={maximum}
            setMaximum={setMaximum}
            setMinimum={setMinimum}
          />
          <div className="my-4 h-[1px] w-full bg-hitam-50" />
          <Category />
          <div className="my-4 h-[1px] w-full bg-hitam-50" />
          <div className="flex flex-col">
            <div className="mx-2 flex flex-row justify-between">
              <p className="text-sm font-medium text-black">Color Palettes</p>
              <div className="flex flex-row gap-2">
                <p className="text-xs font-bold text-primary">Blue</p>
              </div>
            </div>
            <div className="mt-3 flex flex-row flex-wrap justify-center gap-3">
              <button type="button" className="h-8 w-8 rounded-full bg-[#D6D6D6]" />
              <button type="button" className="h-8 w-8 rounded-full bg-[#FFC960]" />
              <button type="button" className="h-8 w-8 rounded-full bg-[#FF3131]" />
              <button type="button" className="h-8 w-8 rounded-full bg-[#297EFF]" />
              <button type="button" className="h-8 w-8 rounded-full bg-[#303030]" />
              <button
                type="button"
                className="h-8 w-8 rounded-full border border-hitam-50 bg-white"
              />
              <button type="button" className="h-8 w-8 rounded-full bg-[#A47AFC]" />
            </div>
          </div>
          <div className="my-4 h-[1px] w-full bg-hitam-50" />
          <div className="flex flex-col">
            <div className="mx-2 flex flex-row justify-between">
              <p className="text-sm font-medium text-black">Themes</p>
              <div className="flex flex-row gap-2">
                <p className="text-xs font-bold text-primary">Elegant</p>
              </div>
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-3">
              <div className="mt-3 grid w-full grid-cols-3 gap-3">
                <button
                  type="button"
                  className="flex w-full grow items-center justify-center rounded-lg border border-hitam-50 py-3 text-sm text-hitam"
                >
                  Retro
                </button>
                <button
                  type="button"
                  className="flex w-full grow items-center justify-center rounded-lg border border-hitam-50 py-3 text-sm text-hitam"
                >
                  Golden Party
                </button>
                <button
                  type="button"
                  className="flex w-full grow items-center justify-center rounded-lg border border-hitam-50 py-3 text-sm text-hitam"
                >
                  Futuristic
                </button>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-0 left-0 z-50 w-full rounded-b-xl border-t border-hitam-50 bg-white p-4">
            <div className="my-4 flex flex-row justify-between">
              <div className="flex flex-row px-2">
                <p className="text-sm font-medium text-hitam-600">Sort by:</p>
                <div className="flex flex-row items-center gap-2 text-xs font-medium text-black">
                  <p>Prive</p>
                  <IoIosArrowBack className="h-4 w-4 rotate-90" />
                </div>
              </div>
              <div className="flex flex-row">
                <p className="text-sm font-medium text-hitam-600">Location:</p>
                <div className="flex flex-row items-center gap-2 text-xs font-medium text-black">
                  <p>Surabaya</p>
                  <IoIosArrowBack className="h-4 w-4 rotate-90" />
                </div>
              </div>
            </div>
            <Link href="./result">
              <button
                type="button"
                className="w-full justify-center rounded-lg bg-primary py-4 text-white"
              >
                See Result
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
