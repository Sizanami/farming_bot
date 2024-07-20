"use client";
import Header from "./Header";
import OptionBtn from "./OptionBtn";
import Footer from "./Footer";
import Plot from "./shop/plot";

export default function ShopPlot() {
  return (
    <div className="bg-[#D7E9B6] flex flex-col w-full h-full">
      <Header />
      <OptionBtn />
      <Plot />
      <div className="flex w-full fixed bottom-0 left-0">
        <Footer />
      </div>
    </div>
  );
}
