import React, { ReactNode } from "react";

interface Props {
  header: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
}

const PageTemplate = ({ header, children }: Props) => {
  return (
    <div>
      {header}
      <div>{children}</div>
    </div>
  );
};

export default PageTemplate;
