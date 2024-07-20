'use client';

import Header from "./Header";
import Footer from "./Footer";
import { TaskCard } from "./card";


const Tasks = () => {
  return (
    <div className="bg-[#D7E9B6] flex flex-col w-full h-full">
        <Header />
        <TaskCard />
        <div className="flex w-full fixed bottom-0 left-0">
          <Footer />
        </div>
    </div>
  )
}

export default Tasks