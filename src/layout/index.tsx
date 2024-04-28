'use client'
import React from "react";
import FooterComponet from "../components/Footer";
import HeaderComponent from "../components/Header";
import ListProducts from "../components/ListProducts";
import MenuSideBar from "../components/MenuSideBar";
import { MainLayout } from "./style";

export default function LayoutComponet() {
  return (
    <MainLayout>
      <HeaderComponent/>
      <ListProducts/>
      <FooterComponet/>
      <MenuSideBar/>
    </MainLayout>
  )
}