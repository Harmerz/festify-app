'use client'

import Image from 'next/image'
import Link from 'next/link'
import { BsThreeDots } from 'react-icons/bs'
import { FiShare2 } from 'react-icons/fi'
import { IoIosArrowBack } from 'react-icons/io'
import { useState, useEffect } from 'react'

async function getData({ id }: { id: string }) {
  const res = await fetch(`https://haikalhilmi.my.id/api/vendors/${id}?populate=*`, {
    next: { revalidate: 60 },
  })
  if (!res.ok) {
    // eslint-disable-next-line no-console
    console.log('Failed to fetch data')
  }

  return res.json()
}
export default function Page({ params }: { params: { slug: string } }) {
  const [data, setData] = useState<any>([])

  useEffect(() => {
    getData({ id: params.slug }).then((d) => setData(d.data.attributes))
  }, [])
  console.log(data)
  const [menu, setMenu] = useState('description')
  return (
    <div className="flex min-h-[100vh] w-full flex-col bg-background px-6">
      <div className="flex flex-col pt-6">
        <div className="mb-2 flex flex-row items-center justify-between">
          <Link href="/quick/vendors/result">
            <IoIosArrowBack className="h-6 w-6 text-hitam" />
          </Link>
          <div className="flex flex-row gap-4 text-2xl text-black">
            <FiShare2 />
            <BsThreeDots />
          </div>
        </div>
        <div className="relative aspect-video w-full rounded-lg">
          <Image
            src={
              process.env.NEXT_PUBLIC_STRAPI_URL + (data?.Picture?.data?.[0]?.attributes?.url ?? '')
            }
            alt={data?.Name}
            fill
            className="rounded-lg"
          />
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-bold text-black">{data?.Name ?? ''}</h2>
        </div>
        <div className="mt-2 flex justify-between">
          <p className=" text-sm font-bold text-black">
            IDR {data?.Harga?.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
          </p>
          <div className="flex flex-row gap-2 text-xs font-medium text-hitam-700">
            <p>17 Reviews</p>
            <p>|</p>
            <p>92 Saved</p>
          </div>
        </div>
        <div className="mt-3 h-[1px] w-full bg-hitam-50" />
        <div className="mt-3 flex flex-row gap-4">
          <button
            type="button"
            className={`text-sm font-medium ${
              menu === 'description'
                ? 'border-b border-black font-semibold text-black'
                : 'font-medium text-hitam-400'
            }`}
            onClick={() => setMenu('description')}
          >
            Description
          </button>
          <button
            type="button"
            className={`text-sm font-medium ${
              menu === 'reviews'
                ? 'border-b border-black font-semibold text-black'
                : 'font-medium text-hitam-400'
            }`}
            onClick={() => setMenu('reviews')}
          >
            Reviews
          </button>
        </div>
        <div className="mt-3">
          <p className="text-xs font-medium text-hitam-700">{data?.Descriptions}</p>
        </div>
      </div>
      <button
        type="button"
        className="absolute bottom-5 left-1/2 flex h-12 w-4/5 -translate-x-1/2 items-center justify-center rounded-lg bg-primary text-base font-medium text-white"
      >
        Book Now
      </button>
    </div>
  )
}
