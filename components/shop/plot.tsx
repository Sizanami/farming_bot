"use client";

import { CardList } from "../card";

const Plot = () => {
  return (
    <>
      <div className="flex flex-col w-full pb-24">
        <CardList imageLand="/land-1.png" coinText="Owned" owned={true} />
        <CardList imageLand="/land-2.png" coinText="5oo coins" owned={false} />
        <CardList imageLand="/land-3.png" coinText="1000 coins" owned={false} />
      </div>
    </>
  );
};

export default Plot;
