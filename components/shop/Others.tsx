'use client';

import React from "react";
import Header from "@/components/Header";
import OptionBtn from "@/components/OptionBtn";
import Footer from "@/components/Footer";
import { OtherCard } from "../card";
interface OthersProps {
  id: string
}

const Others:React.FC<OthersProps> = ({id}) => {
  return (
    <div className="bg-[#D7E9B6] flex flex-col justify-center w-full h-full">
      <Header />
      <OptionBtn />
      <OtherCard id = {id} />
      <div className="flex w-full fixed bottom-0 left-0">
          <Footer />
        </div>
    </div>
  )
}

export default Others;