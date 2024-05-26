"use client";
import { NavbarMenuToggle } from "@nextui-org/navbar";
import { usePathname } from "next/navigation";
import { useState } from "react";
export const NavbarToggle = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const togleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };
  console.log(pathname);
  return <NavbarMenuToggle onClick={() => togleMenu()} />;
};
