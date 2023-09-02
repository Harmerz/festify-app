import Image from 'next/image'
import Link from 'next/link'
import { FiSearch } from 'react-icons/fi'
import { IoIosArrowBack } from 'react-icons/io'

export default function VendorsPage() {
  const categories = [
    {
      name: 'Shade',
      images: 'shade',
    },
    {
      name: 'Venue & Stage',
      images: 'venue',
    },
    {
      name: 'Seat',
      images: 'seat',
    },
    {
      name: 'Decoration & Photobooth',
      images: 'decoration',
    },
    {
      name: 'Sound Supplies',
      images: 'sound',
    },
    {
      name: 'Electronics Allocation',
      images: 'electronics',
    },
    {
      name: 'Photographer',
      images: 'photographer',
    },
    {
      name: 'Merchandise',
      images: 'merchandise',
    },
    {
      name: 'Souvenir',
      images: 'souvenir',
    },
    {
      name: 'Invitation Card',
      images: 'invitation',
    },
    {
      name: 'Wedding Dress',
      images: 'wedding',
    },
    {
      name: 'Garments',
      images: 'garment',
    },
  ]

  return (
    <div className="min-h-[100vh] w-full bg-background ">
      <div className="flex flex-col p-6 pb-28">
        <div className="mb-2 flex flex-row items-center justify-between">
          <Link href="/home">
            <IoIosArrowBack className="h-6 w-6 text-hitam" />
          </Link>
          <div className="flex w-full justify-center text-center">
            <h2 className="text-center text-lg font-bold text-hitam">Categories</h2>
          </div>
        </div>
        <div className="relative mt-4 flex h-full w-full grow">
          <FiSearch className="my-aut2 absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-hitam-50" />
          <input
            type="text"
            placeholder="Search"
            className="h-10 w-full rounded-lg border border-hitam-50 px-4 pl-8 text-xs text-black focus:border-0"
          />
        </div>
        <div className="mt-6 grid grid-cols-3 gap-x-7 gap-y-4">
          {categories.map((item) => (
            <Link className="flex flex-col" href="/quick/vendors/filter" key={item.name}>
              <Image
                className="w-full object-contain"
                src={`/assets/images/quick/vendors/${item.images}.svg`}
                width={0}
                height={0}
                alt={item.name}
              />
              <p className="text-center text-sm font-medium text-hitam">{item.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
