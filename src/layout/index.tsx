'use client'
import React from "react";
import FooterComponet from "../components/Footer";
import HeaderComponent from "../components/Header";
import ListProducts from "../components/ListProducts";

export default function LayoutComponet() {
  return (
    <>
      <HeaderComponent/>
      <ListProducts/>
      <FooterComponet/>
    </>
  )
}