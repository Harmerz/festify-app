import Image from 'next/image'
import Link from 'next/link'
import { FiBell, FiSearch } from 'react-icons/fi'

import { Button } from '@/components/element'
import { BottomBar } from '@/components/layout'

export default function Home() {
  const quickMenu = [
    {
      name: 'Checklist',
      key: 'checklist',
      link: '/checklist',
    },
    {
      name: 'Team',
      key: 'team',
      link: '/team',
    },
    {
      name: 'Event Organizer',
      key: 'eo',
      link: '/event-organizer',
    },
    {
      name: 'Vendors',
      key: 'vendors',
      link: '/vendors',
    },
    {
      name: 'Pro Tips',
      key: 'protips',
      link: '/pro-tips',
    },
    {
      name: 'Top Rated',
      key: 'top-rated',
      link: '/top-rated',
    },
    {
      name: 'Seminar',
      key: 'seminar',
      link: '/seminar',
    },
    {
      name: 'More',
      key: 'more',
      link: '/more',
    },
  ]
  return (
    <div className="bg-background h-full min-h-[100vh] pb-28">
      <div className="flex min-h-fit flex-col justify-center p-6">
        <div className="flex flex-row items-center">
          <div className="relative mr-3 flex h-10 w-10 rounded-full">
            <Image
              src="/assets/images/Taylor-Swift.png"
              alt="photo-profile"
              fill
              className="rounded-full"
            />
          </div>
          <div className="relative flex h-full w-2/5 grow">
            <FiSearch className="my-aut2 absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-hitam-50" />
            <input
              type="text"
              placeholder="Find services, vendor, or item"
              className="mr-4 h-10 w-full rounded-lg border border-hitam-50 px-4 pl-8 text-xs text-black focus:border-0"
            />
          </div>
          <FiBell className="h-6 w-6 text-hitam" />
        </div>
        <div className="mt-6 flex flex-row items-center">
          <div className="relative flex h-10 w-10 items-center justify-center">
            <div className="absolute z-0 flex h-8 w-8 rounded-lg bg-tertiary-50" />
            <Image
              src="/assets/images/home/event.svg"
              className="z-10"
              alt="event"
              width={36}
              height={36}
            />
          </div>
          <div className="ml-4  flex flex-col">
            <p className="text-xl font-bold text-hitam-900">FSAE Japan</p>
            <p className="text-xs text-hitam-400">16/04/2022</p>
          </div>
          <div className="mx-4 flex h-10 w-[1px] bg-putih-600" />
          <div className="flex flex-row">
            <div className="flex flex-col">
              <h1 className="text-3xl font-black text-secondary-900">29:</h1>
              <p className="text-xs font-bold text-primary">Date</p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-3xl font-black text-secondary-900">04:</h1>
              <p className="text-xs font-bold text-primary">Hours</p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-3xl font-black text-secondary-900">29</h1>
              <p className="text-xs font-bold text-primary">Mins</p>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-center">
          {/* Quick Menu */}
          <h2 className="text-base font-bold text-hitam">Quick Menu</h2>
          <div className="grid grid-cols-4">
            {quickMenu.map((item) => (
              <div key={item.key} className="flex flex-col justify-center text-center">
                <Link href={`/quick${item.link}`}>
                  <div className="relative flex h-[70px] w-[70px]">
                    <div className="absolute left-1/2 top-1/2 z-0 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-tertiary-50" />
                    <Image
                      src={`/assets/images/home/${item.key}.svg`}
                      width={item?.key === 'more' ? 22 : 56}
                      height={item?.key === 'more' ? 22 : 66}
                      className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 object-contain"
                      alt={item.name}
                    />
                  </div>
                </Link>
                <p className="text-[14px] font-medium text-hitam">{item?.name}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Premium */}
        <div className="mt-6 flex flex-row items-center rounded-lg bg-secondary py-3">
          <div className="relative ml-3 mr-5 flex h-12 w-12">
            <Image
              src="/assets/images/home/premium.svg"
              alt="premium"
              width={48}
              className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 object-contain"
              height={44}
            />
            <div className="absolute left-1/2 top-1/2 z-0 h-11 w-11 -translate-x-1/2 -translate-y-1/2 rounded-full bg-putih bg-opacity-70" />
          </div>
          <p className="text-xs font-bold text-white">
            Buy Premium to unlock unlimited access to all features and rock your event!
          </p>
        </div>
        {/* Advice */}
        <div className="mt-3 flex flex-col p-4">
          <h2 className="ml-1 text-base font-bold text-hitam">Advice</h2>
          <div className="mb-5 mt-3 flex h-[1px] w-full self-center bg-hitam-50" />
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-3">
              <div className="relative flex h-12 w-12">
                <Image
                  src="/assets/images/home/advice-1.svg"
                  width={48}
                  height={44}
                  alt="advice-1"
                  className="absolute left-1/2 top-1/2 z-10 h-11 w-12 -translate-x-1/2 -translate-y-1/2 object-contain"
                />
                <div className="absolute left-1/2 top-1/2 z-0 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-hitam-50" />
              </div>
              <p className="w-4/5 text-[11px] font-medium text-hitam">
                Get more fun in planning your event by inviting your friends!
              </p>
              <div className="w-20">
                <Button>Invite</Button>
              </div>
            </div>
          </div>
          <div className="mt-3 flex flex-col">
            <div className="flex flex-row items-center gap-3">
              <div className="relative flex h-12 w-12">
                <Image
                  src="/assets/images/home/advice-2.svg"
                  width={48}
                  height={44}
                  alt="advice-2"
                  className="absolute left-1/2 top-1/2 z-10 h-11 w-12 -translate-x-1/2 -translate-y-1/2 object-contain"
                />
                <div className="absolute left-1/2 top-1/2 z-0 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-hitam-50" />
              </div>
              <p className="w-4/5 text-[11px] font-medium text-hitam">
                Avoid missing your tasks by addding widget with event data to your phone&apos;s home
                screen
              </p>
              <div className="w-20">
                <Button>Add</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomBar />
    </div>
  )
}
