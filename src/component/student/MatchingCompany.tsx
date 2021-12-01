import React, { VFC } from "react";
import Link from "next/link";
import { Company } from "src/constants/types";

type Props = {
  company: Company;
};

export const MatchingCompany: VFC<Props> = (props) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-sm">{props.company.name}</p>
        <Link href={`/mypage/chat/${props.company.id}`}>
          <a>
            <button className="w-32 text-xs lg:text-md font-bold rounded tracking-wider text-center bg-blue-500 p-2 text-white hover:bg-blue-400 focus:outline-none cursor-pointer">
              詳細・チャット
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};
