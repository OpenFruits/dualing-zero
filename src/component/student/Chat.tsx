import { VFC, useCallback, useEffect, useRef, useState } from "react";
import cc from "classcat";
import { studentList } from "src/data/studentList";
import { chatList, Message } from "src/data/chatList";

type Props = {
  chatId: string;
};

export const Chat: VFC<Props> = (props) => {
  const [comment, setComment] = useState("");
  const index = Number(props.chatId) - 1;
  const [chat, setChat] = useState<Message[]>(chatList[index]?.messages);

  const inputComment = useCallback(
    (event) => {
      setComment(event.target.value);
    },
    [setComment]
  );

  const submit = () => {
    const newMessage: Message = {
      id: chat.length + 1,
      role: "student",
      timestamp: "2021/12/15 16:00",
      message: comment,
    };
    setChat([...chat, newMessage]);
    setComment("");
  };

  // 自動スクロール
  const messageEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottomOfList = useCallback(() => {
    messageEndRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messageEndRef]);

  useEffect(() => {
    scrollToBottomOfList();
  }, [chat, scrollToBottomOfList]);

  return (
    <div>
      <div className="bg-gray-100 h-[calc(100vh-470px)] rounded-t overflow-y-scroll">
        {chat?.map((item, index) => (
          <div
            key={item.id}
            className={cc([
              {
                ["text-right"]: item.role === "student",
                ["text-left"]: item.role === "company",
              },
            ])}
          >
            {index === chat.length - 1 && (
              <p className="text-red-500 text-center text-xs">
                - 最新のメッセージ -
              </p>
            )}
            <div className="text-left inline-block m-2">
              <div>
                <small className="text-gray-500">{item.timestamp}</small>
                <p className="text-xs">
                  {item.role === "company"
                    ? "株式会社サンプル"
                    : `${studentList[0].firstName} ${studentList[0].lastName}`}
                </p>
              </div>
              <p
                className={cc([
                  "text-sm bg-white inline-block p-2 border rounded-2xl whitespace-pre-wrap",
                  {
                    ["border-theme-dark"]: item.role === "company",
                    ["border-theme"]: item.role === "student",
                  },
                ])}
              >
                {item.message}
              </p>
            </div>
          </div>
        ))}
        <div ref={messageEndRef} />
      </div>
      <div className="flex justify-center items-center rounded-b h-20 p-2 bg-gray-100 border-gray-400 border-t">
        <textarea
          name="comment"
          id="comment"
          value={comment}
          placeholder="メッセージを入力してください"
          className="resize-none h-14 w-5/6 border border-gray-300 p-1 rounded leading-none"
          onChange={inputComment}
        />
        <button
          onClick={submit}
          className="bg-blue-500 text-white font-bold w-14 h-14 mx-3 rounded"
        >
          送信
        </button>
      </div>
    </div>
  );
};
