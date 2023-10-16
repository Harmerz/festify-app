import Link from 'next/link'
import { BsCardChecklist, BsChatLeftDots } from 'react-icons/bs'
import { LiaHomeSolid } from 'react-icons/lia'
import { PiCreditCard } from 'react-icons/pi'

function BillDollar({ className }: { className: string }) {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M16 13H18.5C18.8978 13 19.2794 12.842 19.5607 12.5607C19.842 12.2794 20 11.8978 20 11.5C20 11.1022 19.842 10.7206 19.5607 10.4393C19.2794 10.158 18.8978 10 18.5 10H17.5C17.1022 10 16.7206 9.84196 16.4393 9.56066C16.158 9.27936 16 8.89782 16 8.5C16 8.10218 16.158 7.72064 16.4393 7.43934C16.7206 7.15804 17.1022 7 17.5 7H20"
          stroke="#4F4384"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 3H5C4.73478 3 4.48043 3.10536 4.29289 3.29289C4.10536 3.48043 4 3.73478 4 4V21L6.34 20L8.67 21L11 20L13.33 21L15.66 20L18 21V18"
          stroke="#4F4384"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 7V6M18 14V13M12 15H8M12 11H8"
          stroke="#4F4384"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

function BackActive() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="115"
      height="87"
      viewBox="0 0 115 87"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 87V0.0775452C9.8975 0.864418 14.6421 7.52703 19.896 14.9049C26.9483 24.8081 34.9184 36 57.5 36C80.7044 36 88.9726 24.1823 96.0344 14.0887C101.206 6.69711 105.73 0.230141 115 0.00600433V87H0Z"
        fill="white"
      />
    </svg>
  )
}

export function BottomBar() {
  return (
    <div className="fixed bottom-0 z-[9999] flex w-full flex-row gap-0">
      <div className="flex h-14 w-1/6 grow flex-col justify-center border border-white bg-white">
        <div className="flex justify-center">
          <PiCreditCard className="h-6 w-6 object-contain text-primary" />
        </div>
        <p className="text-center text-[10px] font-bold text-primary">Budget</p>
      </div>
      <Link
        href="/home/transaction"
        className="z-10 flex  h-14 w-1/6 grow flex-col justify-center border border-white bg-white"
      >
        <div className="z-10 flex  h-14 w-full grow flex-col justify-center border border-white bg-white">
          <div className="flex justify-center">
            <BillDollar className="h-6 w-6 object-contain text-primary" />
          </div>
          <p className="text-center text-[10px] font-bold text-primary">Transaction</p>
        </div>
      </Link>
      <div className="flex w-[115px] flex-col items-end border-x border-white bg-transparent" />
      <Link href="/home">
        <div className="absolute bottom-6 left-1/2 flex h-20 w-20 -translate-x-1/2 flex-col justify-center rounded-full border-4 border-transparent bg-primary">
          <div className="flex justify-center">
            <LiaHomeSolid className="textWhite h-10 w-10 object-contain" />
          </div>
          <p className="textWhite text-center text-xs font-bold">Home</p>
        </div>
      </Link>
      <div className="absolute left-1/2 z-0 -translate-x-1/2">
        <BackActive />
      </div>
      <div className="z-10 flex  h-14 w-1/6 grow flex-col justify-center border border-white bg-white">
        <div className="flex justify-center">
          <BsCardChecklist className="h-6 w-6 object-contain text-primary" />
        </div>
        <p className="text-center text-[10px] font-bold text-primary">Whislist</p>
      </div>
      <div className="flex h-14 w-1/6  grow flex-col justify-center border border-white bg-white">
        <div className="flex justify-center">
          <BsChatLeftDots className="h-6 w-6 object-contain text-primary" />
        </div>
        <p className="text-center text-[10px] font-bold text-primary">Chat</p>
      </div>
    </div>
  )
}
export default BottomBar
