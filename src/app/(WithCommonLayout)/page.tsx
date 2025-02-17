"use client";
import { useUser } from "@/context/UserContext";
import { Fragment } from "react";

export default function HomePage() {
  const user = useUser();
  console.log(user);
  return (
    <Fragment>
      <p>Home page</p>
    </Fragment>
  );
}
