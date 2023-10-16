import Image from 'next/image'
import Link from 'next/link'
import { FiSearch } from 'react-icons/fi'

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
export default function Home() {
  return (
    <div className="h-full min-h-[100vh] bg-background pb-28">
      <div className="flex min-h-fit flex-col justify-center p-6">
        <div className="flex flex-row items-center">
          <Link href="/account" className="relative mr-3 flex h-10 w-10 rounded-full">
            <Image
              src="/assets/images/Taylor-Swift.png"
              alt="photo-profile"
              fill
              className="rounded-full"
            />
          </Link>
          <div className="relative flex h-full w-2/5 grow">
            <FiSearch className="my-aut2 absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-hitam-50" />
            <input
              type="text"
              placeholder="Search Event"
              className="mr-4 h-10 w-full rounded-lg border border-hitam-50 px-4 pl-8 text-xs text-black focus:border-0"
            />
          </div>
          <SortIcon />
        </div>
        <h3 className="mt-6 text-sm font-medium text-hitam-300">Recent Event</h3>
        <div className="flex flex-row">
          <div className="h-16 w-16 ">a</div>
          <div className="flex flex-col">
            <p className=" text-xl font-bold text-hitam">FSAE Japan</p>
            <div className="mt-1 flex flex-row gap-6">
              <div className="flex flex-col">
                <p className="text-[11px] font-medium text-hitam-300">Members:</p>
                <p className="text-xs font-medium text-hitam">8 People</p>
              </div>
              <div className="flex flex-col">
                <p className="text-[11px] font-medium text-hitam-300">Last Edited:</p>
                <p className="text-xs font-medium text-hitam">20 Hours Ago</p>
              </div>
              <div className="flex flex-col">
                <p className="text-[11px] font-medium text-hitam-300">Created:</p>
                <p className="text-xs font-medium text-hitam">27 March 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
