import type { NextPage } from "next";
import Head from "next/head";
import { CompanyLayout } from "src/component/CompanyLayout";
import { StudentList } from "src/component/StudentList";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dualing</title>
      </Head>

      <main>
        <CompanyLayout>
          <StudentList />
        </CompanyLayout>
      </main>
    </>
  );
};

export default Home;
