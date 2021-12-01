import { NextPage } from "next";
import { Footer } from "src/component/Footer";
import { Header } from "src/component/Header";
import Vimeo from "@u-wave/react-vimeo";
import { studentList } from "src/data/studentList";
import { Inform } from "src/component/student/Inform";
import { Profile } from "src/component/student/Profile";
import { ScoutList } from "src/component/student/ScoutList";
import { MatchingList } from "src/component/student/MatchingList";

const Mypage: NextPage = () => {
  return (
    <div className="relative min-h-screen pb-[140px] box-border">
      <Header pageTitle="マイページ" href={`/`} />
      <div className="m-auto sm:w-2/3">
        <Inform />
        <Profile />
        {/* {condition === "reserved" && <Booking />} */}
        {/* {condition === "shooting" && <Booking />} */}
        {/* {condition === "waiting" && <GrayBox />} */}
        <div>
          <Vimeo video={studentList[0].vimeoUrl} responsive className="m-2" />
          <ScoutList />
          <MatchingList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mypage;
