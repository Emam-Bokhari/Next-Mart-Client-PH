"use client";
import { UserProvider } from "@/context/UserContext";
import { ReactNode } from "react";
import StoreProvider from "./StoreProvider";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <UserProvider>
      <StoreProvider>{children}</StoreProvider>
    </UserProvider>
  );
}
