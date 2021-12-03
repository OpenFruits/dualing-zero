import { useContext, useEffect, useState, VFC } from "react";
import { BellIcon } from "@heroicons/react/outline";
import { MailIcon } from "@heroicons/react/outline";
import { MailOpenIcon } from "@heroicons/react/outline";
import { ExclamationIcon } from "@heroicons/react/outline";
import { Drawer } from "src/component/Drawer";
import { Button } from "src/component/Button";
import { Notice } from "src/constants/types";
import { noticeList } from "src/data/noticeList";

const defalutNoticeState: Notice = {
  id: "",
  title: "",
  body: "",
  isRead: false,
};

export const Inform: VFC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true);
  const [notices, setNotices] = useState<Notice[]>(noticeList);
  const [notice, setNotice] = useState<Notice>(defalutNoticeState);
  const [numberOfUnread, setNumberOfUnread] = useState(0);
  const [drawerBody, setDrawerBody] = useState("index");

  useEffect(() => {
    setNumberOfUnread(noticeList.filter((notice) => !notice.isRead).length);
  }, []);

  return (
    <div>
      <Drawer
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={drawerBody === "index" ? "通知一覧" : "通知詳細"}
        fromLeft
      >
        <div>
          {drawerBody === "index" ? (
            <div>
              {notices.length === 0 ? (
                <p>通知がありません。</p>
              ) : (
                <ul className="border-b border-gray-300">
                  {notices.map((notice) => (
                    <li
                      key={notice.id}
                      onClick={() => setDrawerBody(notice.id)}
                      className="flex items-center p-2 border-t border-gray-300 hover:bg-gray-100 cursor-pointer"
                    >
                      {notice.isRead ? (
                        <MailOpenIcon className="h-5 w-5 mr-2" />
                      ) : (
                        <div className="relative">
                          <MailIcon className="h-5 w-5 mr-2" />
                          <div className="rounded-full bg-red-600 h-2 w-2 animate-ping absolute top-0 right-2" />
                        </div>
                      )}
                      <p className="truncate">{notice.title}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <div>
              <div className="text-right">
                <Button className="my-3" onClick={() => setDrawerBody("index")}>
                  一覧に戻る
                </Button>
              </div>
              {drawerBody !== "index" ? (
                <article
                  className="prose pt-10"
                  dangerouslySetInnerHTML={{
                    __html: `
                      <p>本田 圭佑さんがスカウトを承認しました。</p>
                      <p>チャット画面からメッセージを送信してください。</p>
                      <a class="text-blue-600" href="/student/1">
                        本田 圭佑さんの詳細画面
                      </a>
                    `,
                  }}
                />
              ) : (
                <div />
              )}
            </div>
          )}
        </div>
      </Drawer>
      通知
      <div
        onClick={onOpen}
        className="flex justify-center items-center py-2 mb-4 border cursor-pointer hover:bg-gray-100"
      >
        {numberOfUnread ? (
          <div className="flex items-center">
            <ExclamationIcon className="h-4 w-4 m-1 text-red-500" />
            <span className="mr-2">{`${numberOfUnread}件の未読があります`}</span>
          </div>
        ) : (
          <span className="mr-2">通知一覧</span>
        )}
        <div className="relative">
          <BellIcon
            onClick={onOpen}
            className="h-8 w-8 text-theme-dark border rounded-full p-1 cursor-pointer hover:bg-gray-100"
          />
          {numberOfUnread > 0 && (
            <div className="rounded-full bg-red-600 h-2 w-2 animate-ping absolute top-0 right-0" />
          )}
        </div>
      </div>
    </div>
  );
};
