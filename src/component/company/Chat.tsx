import { VFC, useState, useCallback, useEffect, useRef } from "react";
import cc from "classcat";
import { chatList, Message } from "src/data/chatList";

type Props = {
  studentName: string;
};

export const Chat: VFC<Props> = (props) => {
  const [comment, setComment] = useState("");
  const [chat, setChat] = useState<Message[]>(chatList[0]?.messages);
  const currentUser = { name: "株式会社サンプル" };

  const inputComment = useCallback(
    (event) => {
      setComment(event.target.value);
    },
    [setComment]
  );

  const submit = async () => {
    const newMessage: Message = {
      id: chat.length + 1,
      role: "company",
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
      <div
        className="bg-gray-100 xl:w-[800px] w-[600px] h-80 overflow-y-scroll"
        id="chat"
      >
        {chat.length === 0 && (
          <p className="p-4 m-2 bg-white rounded">
            学生が最初のメッセージを待っています！
          </p>
        )}
        {chat.map((item, index) => (
          <div
            key={item.timestamp}
            className={cc([
              {
                ["text-right"]: item.role === "company",
                ["text-left"]: item.role === "student",
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
                    ? currentUser?.name
                    : props.studentName}
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
      <div className="flex justify-center items-center xl:w-[800px] w-[600px] h-20 p-2 bg-gray-100 border-gray-400 border-t">
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
          disabled={!comment}
          className="bg-blue-500 text-white font-bold w-14 h-14 mx-3 rounded"
        >
          送信
        </button>
      </div>
    </div>
  );
};
