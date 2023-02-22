import type { NextPage } from "next";
import { InferGetServerSidePropsType, GetServerSidePropsContext } from "next"
import { prisma } from "@/server/db/client"
import Head from "next/head";
import Link from "next/link";
import { cx } from "@/utils/classnames";
import Image from "next/image";

const TabItem: React.FC<{
  title: string,
  index: string,
  value: string,
  href: string
}> = ({
  title,
  index,
  value,
  href
}) => {
  return (
    <Link href={href}>
      <button className={cx(
        "text-center w-full h-20 text-lg hover:backdrop-blur hover:bg-slate-50/20",
        index === value && "backdrop-blur bg-slate-50/10"
      )}>
        {title}
      </button>
    </Link>
  )
}

const AlumniItem: React.FC<{
  name: string,
  photo?: string,
}> = ({
  name,
  photo,
}) => {
  const source = photo ? photo : "/img/no-image.png"

  return (
    <div>
      <div className="relative h-[250px] md:h-[300px]">
        <Image
          src={source}
          alt={name}
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className="mt-4">
        <p>{name}</p>
      </div>
    </div>
  )
}

const Alumni: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (props) => {
  const { classes, major, selectedClass, slugClass } = props
  
  return (
    <>
      <Head>
        <title>YB25 - {selectedClass?.name}</title>
      </Head>
      <div className="min-h-[calc(100vh-60px)] mt-[60px] md:mt-[92px] md:min-h-[calc(100vh-92px)]">
        <div className="flex justify-center py-24 px-4 text-center">
          <h1 className="text-5xl">{major?.name}</h1>
        </div>
        <div className="pb-14 px-4 grid grid-cols-2 gap-4 md:pb-28 md:grid-cols-4 md:max-w-screen-lg md:mx-auto">
          {classes?.map(item => (
            <TabItem
              key={item.id}
              title={item.name}
              value={item.slug}
              index={slugClass}
              href={`/alumni/${major?.abbreviation}/${item.slug}`}
            />
          ))}
        </div>
        <div className="relative px-4 mb-9 grid grid-cols-2 gap-y-9 gap-x-4 md:grid-cols-3 lg:grid-cols-4 md:gap-9 md:max-w-screen-lg md:mx-auto">
          {!!selectedClass?.alumni.length ? selectedClass?.alumni.map(item => (
            <AlumniItem
              key={item.id}
              name={item.name}
              photo={item.photos ?? ""}
            />
          )) : (
            <p className="text-4xl text-center col-span-4">404</p>
          )}
        </div>
      </div>
    </>
  )
}

export default Alumni

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext<{ major: string, slug: string }>
) => {
  const majorParam = ctx.params?.major
  const slug = ctx.params?.slug ?? ""

  const major = await prisma.major.findUnique({
    where: {
      abbreviation: majorParam
    },
    include: {
      class: {
        orderBy: {
          name: "asc"
        },
      }
    }
  });

  const slugClass = slug[0] ?? major?.class[0]?.slug ?? ""

  const selectedClass = await prisma.class.findUnique({
    where: {
      slug: slugClass
    },
    include: {
      alumni: {
        orderBy: {
          name: "asc"
        }
      }
    }
  })

  const classes = major?.class ?? []

  return {
    props: {
      major,
      classes,
      selectedClass,
      slugClass,
    }
  }
}