import { VFC } from "react";

type Props = {
  children: React.ReactNode;
};

export const CompanyLayout: VFC<Props> = (props) => {
  return <div className="bg-theme">{props.children}</div>;
};
