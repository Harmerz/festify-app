'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'

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

async function getData() {
  const res = await fetch('https://haikalhilmi.my.id/api/vendors?populate=*', {
    next: { revalidate: 60 },
  })
  if (!res.ok) {
    // eslint-disable-next-line no-console
    console.log('Failed to fetch data')
  }

  return res.json()
}

export default function Result() {
  const [data, setData] = useState([])
  useEffect(() => {
    getData().then((d) => setData(d.data))
  }, [])
  console.log(data)

  //   {
  //     rate: '4.5',
  //     title: 'Alicia Decoration',
  //     review: '17',
  //     saved: '92',
  //     description:
  //       'Enchanting flower rain wedding concept Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ',
  //     image: '/result (3)',
  //     price: '77800000',
  //     key: 6,
  //   },
  // ]
  return (
    <div className="min-h-[100vh] w-full bg-background ">
      <div className="flex flex-col pt-6">
        <div className="mb-2 flex flex-row items-center justify-between px-6">
          <Link href="/quick/vendors">
            <IoIosArrowBack className="h-6 w-6 text-hitam" />
          </Link>
          <h2 className="text-lg font-bold text-hitam">Surabaya</h2>
          <div className="flex flex-row items-center gap-2">
            <SortIcon />
          </div>
        </div>
        <div
          id="sort_result"
          className="mt-4 flex w-full flex-row justify-center gap-2 overflow-x-auto"
        >
          <button
            type="button"
            className="min-w-24 inline-block rounded-lg border border-hitam-50 px-4 py-2 text-sm font-medium text-hitam-600"
          >
            70-170JT
          </button>
          <button
            type="button"
            className="rounded-lg border border-hitam-50 px-4 py-2 text-sm font-medium text-hitam-600"
          >
            Wedding
          </button>
          <button
            type="button"
            className="rounded-lg border border-hitam-50 px-4 py-2 text-sm font-medium text-hitam-600"
          >
            White
          </button>
          <button
            type="button"
            className="rounded-lg border border-hitam-50 px-4 py-2 text-sm font-medium text-hitam-600"
          >
            Elegant
          </button>
        </div>
        <div className="my-4 h-[1px] w-full bg-hitam-50" />
        <div className="flex flex-col gap-3 px-6 pb-10">
          {data.map((e: any) => {
            const item = e.attributes
            return (
              <Link key={e?.id} href={`/quick/vendors/result/${e.id}`}>
                <div className="flex flex-row gap-3">
                  <div className="relative w-1/2">
                    <div className="absolute left-2 top-2 z-50 flex flex-row items-center rounded-lg bg-white p-1 pr-2 text-xs font-medium text-hitam">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="11"
                        viewBox="0 0 13 11"
                        fill="none"
                      >
                        <path
                          d="M6.04597 0.484332C6.22468 0.0968965 6.77532 0.0968964 6.95403 0.484332L8.21666 3.22172C8.2895 3.37962 8.43914 3.48835 8.61182 3.50882L11.6054 3.86376C12.0291 3.91399 12.1993 4.43769 11.886 4.72737L9.67278 6.77411C9.54511 6.89217 9.48795 7.06809 9.52184 7.23865L10.1093 10.1954C10.1925 10.6139 9.74702 10.9375 9.37471 10.7291L6.74422 9.2567C6.59248 9.17177 6.40752 9.17177 6.25578 9.2567L3.62529 10.7291C3.25298 10.9375 2.8075 10.6139 2.89066 10.1954L3.47816 7.23865C3.51205 7.06809 3.45489 6.89217 3.32722 6.77411L1.11399 4.72737C0.800736 4.43769 0.970894 3.91399 1.39459 3.86376L4.38818 3.50882C4.56086 3.48835 4.7105 3.37962 4.78334 3.22172L6.04597 0.484332Z"
                          fill="#FFDE59"
                        />
                      </svg>
                      {item.rate}
                    </div>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.Picture.data[0].attributes.url}`}
                      className="h-full w-full rounded-lg"
                      alt={item.title}
                      fill
                    />
                  </div>
                  <div className="flex w-1/2 flex-col gap-2 py-3">
                    <div className="">
                      <p className="text-lg font-bold text-hitam">{item.Name}</p>
                    </div>
                    <div className="flex flex-row gap-2">
                      <p className="text-sm font-medium text-hitam">{item.review} Review</p>
                      <div className="h-[14px] w-[1px] bg-hitam-600" />
                      <p className="text-sm font-medium text-hitam">{item.saved} Saved</p>
                    </div>
                    <p className="line-clamp-2 text-xs text-hitam-700">{item.Descriptions}</p>
                    <p className="text-sm font-bold text-hitam">IDR {item.Harga}</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
