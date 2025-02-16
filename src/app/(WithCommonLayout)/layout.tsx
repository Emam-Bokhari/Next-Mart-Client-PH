import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Fragment, ReactNode } from "react";

export default function CommonLayout({ children }: { children: ReactNode }) {
  return (
    <Fragment>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </Fragment>
  );
}
