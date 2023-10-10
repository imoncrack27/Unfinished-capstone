"use client";
import { ReactNode } from "react";
import Sidebar from "@/components/NavBar";
import NavBar from "@/components/NavBar";
import logo from "@/public/LOGO.jpg";

interface Props {
  children: ReactNode | ReactNode[];
}

export default function BaseLayout({ children }: Props) {
  return (
    <div className="layout">
      <NavBar />
      {children}
    </div>
  );
}
