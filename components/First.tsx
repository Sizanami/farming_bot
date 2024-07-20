import Image from "next/image";
import Header from "./Header";
import Link from "next/link";

export default function First () {
    return (
    <div className="bg-[#C9DDA4] relative">
        <Header></Header>
        <div className="z-10 flex w-full justify-center text-[50px] font-[800] my-10 md:my-[60px]">
            LOGO
        </div>
        <div className="relative setFullWidth pb-[1000px]">
            <Image alt="fruits" src="/fruits.png" width="700" height="350" layout="responsive"></Image>
            <div className="absolute top-[50px] md:top-[150px] setFullWidth h-[100vh]">
                <div className="relative">
                    <Image alt="ellipse" src="/ellipse.png" width="2000" height="400" layout="responsive"></Image>
                    <div className="flex flex-col w-full items-center justify-center absolute top-[100px]">
                        <div className="w-5/6 text-[32px] font-[700]">
                            <p className="text-center">
                                Welcome to Farm Adventure
                            </p>
                        </div>
                        <div className="w-5/6 text-[16px] font-[500]">
                            <p className="text-center">
                                As a new player, you will receive a plot of land, a strawberry seedling, and three water cans to get started. Click {"Play Now"} to begin your adventure!
                            </p>
                        </div>
                        <Link href={'/shop'}>
                            <Image className="my-[15px]" alt="start" src="/btn_play.png" width="200" height="50"></Image>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}