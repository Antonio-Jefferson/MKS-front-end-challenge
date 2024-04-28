'use client'
import React, { useState } from "react";
import FooterComponet from "../components/Footer";
import HeaderComponent from "../components/Header";
import ListProducts from "../components/ListProducts";
import MenuSideBar from "../components/MenuSideBar";
import { MainLayout } from "./style";

export default function LayoutComponet() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <MainLayout>
      <HeaderComponent setIsOpen={setIsOpen}/>
      <ListProducts/>
      <FooterComponet/>
      {isOpen ? <MenuSideBar setIsOpen={setIsOpen} /> : null}
    </MainLayout>
  )
}