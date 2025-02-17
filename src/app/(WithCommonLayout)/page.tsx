import { getCurrentUser } from "@/services/AuthService";
import { Fragment } from "react";

export default async function HomePage() {
  const user = await getCurrentUser();
  console.log(user);
  return (
    <Fragment>
      <p>Home page</p>
    </Fragment>
  );
}
