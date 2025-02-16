import { Fragment, ReactNode } from "react";

export default function CommonLayout({ children }: { children: ReactNode }) {
  return <Fragment>{children}</Fragment>;
}
