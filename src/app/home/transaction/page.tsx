import Link from 'next/link'
import { FiSearch } from 'react-icons/fi'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { IoIosArrowBack } from 'react-icons/io'

export default function Transaction() {
  return (
    <div className="min-h-[100vh] w-full bg-background ">
      <div className="flex flex-col p-6 pb-28">
        <div className="mb-2 flex flex-row items-center justify-between">
          <Link href="/home">
            <IoIosArrowBack className="h-6 w-6 text-hitam" />
          </Link>
          <div className="flex w-full justify-center text-center">
            <h2 className="text-center text-lg font-bold text-hitam">Transaction</h2>
          </div>
        </div>
        <div className="relative mb-6 mt-4 flex h-full w-full grow">
          <FiSearch className="my-aut2 absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-hitam-50" />
          <input
            type="text"
            placeholder="Search Transaction"
            className="h-10 w-full rounded-lg border border-hitam-50 px-4 pl-8 text-xs text-black focus:border-0"
          />
        </div>
        <div className="flex w-full flex-row gap-2">
          <div className="flex w-1/2 flex-row items-center justify-between rounded-lg border bg-putih px-4 py-2">
            <p className="text-xs text-hitam-600">Status Pembayaran</p>
            <IoIosArrowBack className="h-4 w-4 -rotate-90 text-hitam" />
          </div>
          <div className="flex w-1/2 flex-row items-center justify-between rounded-lg border bg-putih px-4 py-2">
            <p className="text-xs text-hitam-600">Status Pembayaran</p>
            <IoIosArrowBack className="h-4 w-4 -rotate-90 text-hitam" />
          </div>
        </div>
        <div className="mt-4 flex flex-col rounded-2xl border border-hitam-50 bg-white p-4">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-2">
              <HiOutlineShoppingBag className="h-6 w-6 text-hitam" />
              <div className="flex flex-col">
                <p className="text-bold text-[10px] text-black">Belanja</p>
                <p className="text-[8px] font-medium text-hitam-300">6 Juni 2023</p>
              </div>
            </div>
            <div className=" flex h-4 w-12 items-center justify-center rounded bg-[#32CD3236] bg-opacity-20 text-center text-[8px] font-bold text-[#32CD32]">
              Selesai
            </div>
          </div>
          <div className="mb-3 mt-2 h-[1px] w-full bg-hitam-50" />
          <div className="flex flex-row items-center gap-3">
            <div className="relative flex aspect-square h-12 w-12 rounded-lg">photos</div>
            <div className="flex flex-col">
              <p className="flex text-sm font-bold text-black">Decoration White Rare</p>
              <p className="text-xs font-medium text-hitam-300">13 Agustus 2023-19 Agustus 2023</p>
            </div>
          </div>
          <div className="mt-12 flex flex-row items-center justify-between">
            <div className="flex flex-col">
              <p className="text-[10px] font-bold text-hitam-300">Total Belanja</p>
              <p className=" text-xs font-medium text-black">30.000.000</p>
            </div>
            <div className="flex h-6 flex-row gap-2">
              <div className="flex w-14 items-center justify-center rounded-md bg-primary text-xs font-medium text-white">
                Ulas
              </div>
              <div className="flex w-20 items-center justify-center rounded-md border border-hitam-50 bg-white text-xs font-medium text-black">
                Beli Lagi
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
