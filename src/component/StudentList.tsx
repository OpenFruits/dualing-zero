import { VFC } from "react";
import { Card } from "src/component/Card";
import { studentList } from "src/data/studentList";

const result = "全学生";

export const StudentList: VFC = () => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold pb-4 border-b border-gray-500">
        学生一覧
      </h1>
      <p className="my-4 text-lg bg-gray-50 rounded p-2">{`検索条件：${result}`}</p>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {studentList.map((student) => (
          <Card key={student.uid} student={student} />
        ))}
      </div>
    </div>
  );
};
