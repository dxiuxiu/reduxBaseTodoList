import React from "react";
interface IProps {
  active: boolean;
  onClick: () => void;
}
const Link: React.FunctionComponent<IProps> = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a
      href=""
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
}


export default Link;
