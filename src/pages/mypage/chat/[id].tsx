import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { Chat } from "src/component/student/Chat";
import { Button } from "src/component/Button";
import { Layout } from "src/component/Layout";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import { Company } from "src/constants/types";
import { Header } from "src/component/Header";
import { companyList } from "src/data/companyList";

const CompanyId: NextPage = () => {
  const router = useRouter();
  const id = router.query.id as unknown as number;
  const company = companyList[id - 1];

  return (
    <>
      <Header pageTitle="チャット" href="/mypage" />
      <Layout>
        <div className="lg:w-[800px] sm:w-[600px] w-full m-auto">
          <div className="sm:flex sm:justify-between sm:flex-row-reverse">
            <div className="flex justify-end mx-2 my-2">
              <Button
                className="rounded sm:shadow-md h-10"
                onClick={() => router.push("/mypage")}
              >
                戻る
              </Button>
            </div>
            <div>
              <h1 className="text-2xl font-bold">{company?.name}</h1>
              <p className="text-sm font-normal">{company?.industry}</p>
            </div>
          </div>
          <div className="border-t-2 py-2 my-2">
            <p>【求める職種】</p>
            <p>{company?.occupations.join(", ")}</p>
            <div className="py-1.5" />
            <p>【企業サイト】</p>
            <div className="inline-block">
              <Link href={company?.corporateUrl || ""}>
                <a className="flex items-center hover:text-gray-500">
                  <p className="mr-1">{company?.corporateUrl}</p>
                  <ExternalLinkIcon className="h-5 w-5" />
                </a>
              </Link>
            </div>
            <div className="py-1.5" />
            <p>【採用サイト】</p>
            <div className="inline-block">
              <Link href={company?.recruitUrl || ""}>
                <a className="flex items-center hover:text-gray-500">
                  <p className="mr-1">{company?.recruitUrl}</p>
                  <ExternalLinkIcon className="h-5 w-5" />
                </a>
              </Link>
            </div>
          </div>
          <Chat chatId={String(id)} />
        </div>
      </Layout>
    </>
  );
};

export default CompanyId;
