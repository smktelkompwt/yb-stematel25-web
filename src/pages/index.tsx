import type { NextPage } from "next";
import { InferGetServerSidePropsType } from "next"
import { prisma } from "@/server/db/client"
import Head from "next/head";

const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (props) => {
  const { student } = props
  return (
    <>
      <Head>
        <title>YearBook</title>
      </Head>
      <main className="min-h-screen flex items-center justify-center flex-col">
        <div>
          <h1>Students List:</h1><br />
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th scope="col" className="px-6 py-3">No</th>
                <th scope="col" className="px-6 py-3">Nama</th>
                <th scope="col" className="px-6 py-3">Kelas</th>
              </tr>
            </thead>
            <tbody>
              {student.map((item, idx) => (
                <tr key={idx} className="border-b">
                  <td className="px-6 py-4">{idx + 1}</td>
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4">{item.class}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  )
}

export default Home

export const getServerSideProps = async () => {
  const student = await prisma.student.findMany({
    orderBy: [
      { class: 'asc' }
    ]
  })

  return {
    props: {
      student
    }
  }
}
