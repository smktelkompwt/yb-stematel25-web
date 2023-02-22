import Link from "next/link"

const Header: React.FC = () => {
  return (
    <div className="px-4 py-4 md:px-8 md:py-6 fixed top-0 left-0 right-0 flex z-10">
      <Link href="/" passHref>
        <div className="flex gap-2 items-end">
          <div className="w-4 h-7 md:w-8 md:h-11 bg-red-600" />
          <p className="text-xl md:text-4xl font-bold leading-none">YB25</p>
        </div>
      </Link>
    </div>
  )
}

export default Header
