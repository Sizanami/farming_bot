'use client';

import Header from "./Header";
import Footer from "./Footer";
import { ReferralCard } from "./card";


const Referral = () => {
  return (
    <div className="bg-[#D7E9B6] flex flex-col w-full h-full">
        <Header />
        <ReferralCard />
        <div className="flex w-full fixed bottom-0 left-0">
          <Footer />
        </div>
    </div>
  )
}

export default Referral