import Link from "next/link"
import { useSession, signIn, signOut } from "next-auth/react"

const Header: React.FC = () => {
  const { data: session } = useSession()
  return (
    <div className="px-4 py-4 md:px-8 md:py-6 fixed top-0 left-0 right-0 flex z-10 justify-between">
      <Link href="/" passHref>
        <div className="flex gap-2 items-end">
          <div className="w-5 h-8 md:w-8 md:h-11 bg-red-600" />
          <p className="text-2xl md:text-4xl font-bold leading-none">YB25</p>
        </div>
      </Link>

      {session ? (
        <button onClick={() => signOut()} className="">
          Keluar
        </button>
      ) : (
        <button onClick={() => signIn()} className="">
          Masuk
        </button>
      )}
    </div>
  )
}

export default Header
