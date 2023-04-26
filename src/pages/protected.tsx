import { NextPage, GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";

const Protected: NextPage = () => {
  return (
    <div className="container mx-auto px-4 min-h-screen flex items-center justify-center flex-col">
      Protected
    </div>
  );
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const session = await getServerSession(context.req, context.res, authOptions)

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
      session
    }
  }
}

export default Protected;
