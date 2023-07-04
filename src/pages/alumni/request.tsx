import {
  NextPage,
  GetServerSidePropsContext,
  InferGetServerSidePropsType
} from "next"
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]"
import { prisma } from "@/server/db/client"
import { FormEvent, useState } from "react"
import { useRouter } from "next/router";
import Head from "next/head";

const Request: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (props) => {
  const { classOptions } = props

  const router = useRouter()

  const [name, setName] = useState("")
  const [classId, setClassId] = useState(classOptions.length ? classOptions[0].id : "")

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      const data = {
        name,
        classId
      }
  
      const res = await fetch("/api/alumni/create", {
        method: "POST",
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(data)
      })

      const result = await res.json()

      if (result.success) {
        router.push("/")
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <Head>
        <title>YB25 - Request</title>
      </Head>
      <div className="py-12 px-4 min-h-[calc(100vh-60px)] mt-[60px] md:px-8 container md:max-w-screen-lg md:mx-auto md:mt-[92px] md:min-h-[calc(100vh-92px)]">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div className="w-[200px] h-[280px] bg-slate-300">
            </div>
            <div className="flex flex-col gap-2 max-w-[300px]">
              <label htmlFor="name">Nama</label>
              <input
                type="text"
                id="name"
                name="name"
                maxLength={50}
                minLength={2}
                required
                value={name}
                onChange={(e => setName(e.target.value))}
                className="border-none rounded-none p-1.5 text-slate-800"
              />
            </div>
            <div className="flex flex-col gap-2 max-w-[300px]">
              <label htmlFor="class">Kelas</label>
              <select
                id="class"
                name="class"
                required
                value={classId}
                onChange={(e => setClassId(e.target.value))}
                className="border-none rounded-none p-1.5 text-slate-800 hover:cursor-pointer"
              >
                {classOptions.map(item => (
                  <option key={item.id} value={item.id}>{item.name}</option>
                ))}
              </select>
            </div>
            <button type="submit" className="bg-red-600 p-2 hover:bg-red-500 max-w-[300px]">
              Request
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Request;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const session = await getServerSession(context.req, context.res, authOptions)

  const classOptions = await prisma.class.findMany({
    orderBy: {
      name: "asc"
    }
  });

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    props: {
      session,
      classOptions,
    }
  }
}
