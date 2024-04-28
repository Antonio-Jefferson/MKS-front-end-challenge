'use client'
import React, { useState } from "react";
import FooterComponet from "../components/Footer";
import HeaderComponent from "../components/Header";
import ListProducts from "../components/ListProducts";
import MenuSideBar from "../components/MenuSideBar";
import { MainLayout } from "./style";
import { motion, AnimatePresence } from 'framer-motion';

export default function LayoutComponet() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <MainLayout>
      <HeaderComponent setIsOpen={setIsOpen}/>
      <ListProducts/>
      <FooterComponet/>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '50%' }}
            animate={{ x: 0 }}
            exit={{ x: '50%' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          >
            <MenuSideBar setIsOpen={setIsOpen} />
          </motion.div>
        )}
      </AnimatePresence>
    </MainLayout>
  )
}