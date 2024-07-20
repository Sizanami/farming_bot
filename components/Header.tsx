import Image from "next/image";

export default function Header () {
    return (
    <div className="flex flex-row w-full px-8 md:px-20 font-[700] text-[15px] justify-between py-3">
        <div>9:41</div>
        <div className="flex flex-row setHeight20">
            <Image className="mx-[5px]" layout="intrinsic" height="10" width="30" alt="connection" src="/connection.png"></Image>
            <Image className="mx-[5px]" layout="intrinsic" height="10" width="30" alt="wifi" src="/wifi.png"></Image>
            <Image className="mx-[5px]" layout="intrinsic" height="10" width="30" alt="battery" src="/battery.png"></Image>
        </div>
    </div>
    );
}