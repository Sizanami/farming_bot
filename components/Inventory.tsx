'use client';

import Header from "./Header";
import Footer from "./Footer";
import { InventoryCard } from "./card";


const Inventory = () => {
  return (
    <div className="bg-[#D7E9B6] flex flex-col w-full h-full">
        <Header />
        <InventoryCard />
        <div className="flex w-full fixed bottom-0 left-0">
          <Footer />
        </div>
    </div>
  )
}

export default Inventory