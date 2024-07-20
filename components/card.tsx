'use client';
import React, {useState} from "react";
import Image from "next/image";

interface CardProps {
  imageLand: string,
  coinText: string,
  owned: boolean
}

const CardList:React.FC<CardProps> = ({imageLand, coinText, owned}) => {
  return (
    <>
      <div className="flex p-5 w-full justify-center">
        <div className="flex flex-col w-full">
          <div className="relative flex p-5 w-full justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/table.png)', height: '300px' }}>
            <div className="flex flex-col items-center justify-between w-full h-full relative">
              <div className="flex justify-between items-center gap-5">
                <Image src={'/coin.png'} width={100} height={100} alt="coin.png" className=" w-[40px] h-auto" />
                <span className="text-black font-bold">{coinText}</span>
              </div>
              <div className="flex items-center justify-between">
                <Image src={`${imageLand}`} width={100} height={100} alt="seedling.png" className="w-[200px] h-auto" />
              </div>
              <div className="bottom-0 left-0 w-full flex justify-center">
                <Image src={`${owned ? '/btn_own.png' : '/btn_buy.png'}`} width={100} height={100} alt="btn-own.png" className="w-[140px] md:w-[500px] h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

interface OtherCardProps{
  id: string
}

const OtherCard:React.FC<OtherCardProps> = ({id}) => {
  const items = []
  switch (id) {
    case 'seedlings':
      items.push(
        <div className="grid grid-cols-3 gap-2 w-full">
        <a href="#seedling_1">
          <Image src={'/seedling_1.png'} width={100} height={100} alt="seedling.png" className="w-full" />
        </a>
        <a href="#seedling_2">
          <Image src={'/seedling_2.png'} width={100} height={100} alt="seedling.png" className="w-full" />
        </a>
        <a href="#seedling_3">
          <Image src={'/seedling_3.png'} width={100} height={100} alt="seedling.png" className="w-full" />
        </a>
      </div>
      )
      break;
    case 'cans':
      items.push(              <div className="grid grid-cols-3 gap-2 w-full">
        <a href="#cans_1">
          <Image src={'/cans_1.png'} width={100} height={100} alt="cans.png" className="w-full" />
        </a>
        <a href="#cans_2">
          <Image src={'/cans_2.png'} width={100} height={100} alt="cans.png" className="w-full" />
        </a>
        <a href="#cans_3">
          <Image src={'/cans_3.png'} width={100} height={100} alt="cans.png" className="w-full" />
        </a>
      </div>)
      break;
    case 'tokens':
      items.push(              <div className="grid grid-cols-3 gap-2 w-full">
        <a href="#tokens_1">
        <Image src={'/tokens_1.png'} width={100} height={100} alt="tokens.png" className="w-full" />
        </a>
        <a href="#tokens_2">
        <Image src={'/tokens_2.png'} width={100} height={100} alt="tokens.png" className="w-full" />
        </a>
        <a href="#tokens_3">
        <Image src={'/tokens_3.png'} width={100} height={100} alt="tokens.png" className="w-full" />
        </a>
      </div>)
      break;
    default:
      break;
  }
  return (
    <>
      <div className="flex p-5 w-full justify-center mb-44">
        <Image src={'/table.png'} width={100} height={90} alt="coin.png" className="relative w-[100%] h-[250px]" />
        <div className="absolute mt-5">
          <div className="flex text-center items-center w-full justify-center gap-3">
            <Image src={'/coin.png'} width={100} height={100} alt="coin.png" className=" w-[40px] h-auto" />
            <p className="text-black font-bold">Buy {id}</p>
          </div>
        </div>
        <div className="absolute mt-16">
          {items}
        </div>
      </div>
    </>
  )
}

const ReferralCard:React.FC = () => {
  const coinValue = [
    {
      detail:'1 friend: 50coins'
    },
    {
      detail:'5 friend: 1 extra plot of land'
    },
    {
      detail:'10 friend: 1 special seeding(Apple or Pear)'
    },
  ]
  return (
    <>
      <div className="relative flex flex-col p-5 w-full bg-cover bg-center" style={{ backgroundImage: 'url(/table.png)', height: '480px', backgroundSize:'100% 100%' }}>
        {/* Content Overlay */}
        <div className="relative flex flex-col items-center justify-center h-full w-full">
          
          {/* Refer to Earn Section */}
          <div className="flex justify-center items-center gap-5 mt-10">
            <Image src={'/coin.png'} width={40} height={40} alt="coin.png" />
            <span className="text-black font-bold">Refer to Earn</span>
          </div>

          {/* Title and Referral Code */}
          <div className="relative flex flex-col items-center bg-cover bg-center w-full px-10 bg-no-repeat" style={{ backgroundImage: 'url(/title.png)', backgroundSize: '250px 100%', height:'100vh' }}>
            <div className="flex flex-col items-center justify-center w-full h-full bg-opacity-50">
              <p className="text-white text-center">farmaadventure/referral/ABC123</p>
            </div>
          </div>

          {/* Copy Code and How It Works */}
          <div className="flex flex-col items-center border-b-2 border-slate-600 space-y-2">
            <div className="flex items-center gap-5">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                <path fill="#7aee63" d="M18.355 6.54h-1.94V4.69a2.69 2.69 0 0 0-1.646-2.484A2.66 2.66 0 0 0 13.745 2h-8.05a2.68 2.68 0 0 0-2.67 2.69v10.09a2.68 2.68 0 0 0 2.67 2.69h1.94v1.85a2.68 2.68 0 0 0 2.67 2.68h8a2.68 2.68 0 0 0 2.67-2.68V9.23a2.69 2.69 0 0 0-2.62-2.69M7.635 9.23v6.74h-1.94a1.18 1.18 0 0 1-1.17-1.19V4.69a1.18 1.18 0 0 1 1.17-1.19h8.05a1.18 1.18 0 0 1 1.17 1.19v1.85h-4.61a2.69 2.69 0 0 0-2.67 2.69"></path>
              </svg>
              <span className="text-[#7aee63] font-bold">Copy code</span>
            </div>
            <div className="flex items-center gap-5">
              <span className="text-black font-bold">How does it work?</span>
            </div>
            {coinValue.map((value: any, index: number) => (
              <div key={index} className="flex items-center gap-1">
                <Image src={'/coin.png'} width={30} height={30} alt="coin.png" />
                <span className="text-black text-xs font-semibold">{value.detail}</span>
              </div>
            ))}
          </div>

          {/* Current Reward Section */}
          <div className="flex flex-col items-center mt-10 pb-10">
            <div className="flex items-center gap-3">
              <Image src={'/coin.png'} width={30} height={30} alt="coin.png" />
              <span className="text-[#7aee63] text-xl font-bold">345 coins</span>
            </div>
            <p className="text-sm text-center mt-2">Your current Reward</p>
          </div>
        </div>
      </div>

    </>
  )
}

const TaskCard:React.FC = () => {
  const taskList = [
    {
      title:'Join our Twitter channel',
      coins: '20 coins'
    },
    {
      title:'Join our Telegram channel',
      coins: '20 coins'
    },
    {
      title:'Havest 5 Fruits',
      coins: '20 coins'
    },
    {
      title:'Havest 2 Fruits',
      coins: '20 coins'
    },
    {
      title:'Water 5 Plants',
      coins: '20 coins'
    },
    {
      title:'Havest 2 Fruits',
      coins: '20 coins'
    },
  ]
  return (
    <>
      <div className="flex p-5 w-full justify-center">
        <div className="flex w-full justify-center">
          <Image 
            src={'/title.png'}
            width={100}
            height={100}
            alt="tasks.png"
            className="w-full h-auto"
          />
          <div className="absolute mt-4 ">
            <div className="flex text-center items-center w-full justify-center gap-5">
              <Image src={'/coin.png'} width={100} height={100} alt="coin.png" className=" w-[40px] h-auto" />
              <p className="text-white text-2xl font-bold">Your Current Task</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 pb-28">
        {
          taskList.map((value: any, index: number) => (
            <div key={index} className="flex px-2 w-full justify-center">
              <div className="relative flex items-center bg-cover" style={{ backgroundImage: 'url(/table_1.png)', height: '90px', width: '100%', backgroundSize:'100% 100%' }}>
                <div className="flex justify-between w-full p-3 px-10">
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm">{value.title}</span>
                    <div className="flex items-center">
                      <Image src={'/coin.png'} width={30} height={30} alt="coin.png" className="w-[30px] h-auto" />
                      <span className="text-black text-sm">{value.coins}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Image src={'/tasks_3.png'} width={100} height={100} alt="tasks_3.png" className="w-full h-auto" />
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

const InventoryCard:React.FC = () => {
  const [plot, setPlot] = useState<string>('land-1.png');
  const inventory = [
    {title:'inventory_4.png'},
    {title:'inventory_5.png'},
    {title:'inventory_8.png'},
    {title:'inventory_3.png'},
    {title:'inventory_1.png'},
    {title:'inventory_2.png'},
    {title:'inventory_7.png'},
    {title:'inventory_7.png'},
  ]
  return (
    <>
      <div className="flex flex-col space-y-5 p-5 w-full justify-center">
        <div className="flex w-full justify-center">
          <Image 
            src={'/title.png'}
            width={100}
            height={100}
            alt="tasks.png"
            className="w-full h-auto"
          />
          <div className="absolute mt-4 ">
            <div className="flex text-center items-center w-full justify-center gap-5">
              <p className="text-white text-3xl font-bold">Your Inventory</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col pb-24 space-y-5">
          <div className="relative flex p-5 w-full justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/table.png)', height: '300px' }}>
            <div className="flex flex-col gap-3 items-center justify-between w-full h-full relative">
              <span className="font-bold text-xl">Plot: {plot === 'land-1.png' ? '1':'2'}/2</span>
              <div className="flex items-center justify-between">
                <Image src={`${'/'}${plot}`} width={100} height={100} alt="seedling.png" className="w-[200px] h-auto" />
              </div>
              <div className="bottom-0 left-0 w-full flex justify-center mb-8">
                <Image src='/btn_own.png' width={100} height={100} alt="btn-own.png" className="w-[140px] md:w-[500px] h-auto" />
              </div>
              <div className="absolute w-full top-1/3 pl-60 left-8">
                <a href="#" onClick={() => setPlot('land-2.png')}>
                  <Image src='/arrow.png' width={100} height={100} alt="arrow.png" className=" w-[50px] h-auto rotate-180" />
                </a>
              </div>
              <div className="absolute w-full top-1/3 pr-60 right-8">
                <a href="#" onClick={() => setPlot('land-1.png')}>
                  <Image src='/arrow.png' width={100} height={100} alt="arrow.png" className=" w-[50px] h-auto " />
                </a>
              </div>
            </div>
          </div>
          <div
            className="relative flex  bg-cover bg-center flex-col items-center" 
            style={{ backgroundImage: 'url(/table_2.png)', width:'100%', height:'100%', backgroundSize:'100% 100%' }}
          >
            <div className="mt-10">
              <div className="flex flex-col space-y-1">
                <p className="font-bold text-center">Available Products</p>
                <div className="grid grid-cols-3 items-center gap-2 pb-10">
                  {inventory.map((value: any, index: number) => (
                    <Image 
                      key={index} 
                      src={`${'/'}${value.title}`} 
                      width={100} 
                      height={100} 
                      alt={value.title} 
                      className="w-full h-auto"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const MyLandCard = () => {
  const mylandList = [
    {title:"myland_2.png"},
    {title:"myland_7.png"},
    {title:"myland_3.png"},
    {title:"myland_7.png"},
    {title:"myland_4.png"},
    {title:"myland_7.png"},
    {title:"myland_5.png"},
    {title:"myland_6.png"},
  ];
  const myLand = [
    {land:'land-1.png', title:'Plots 1'},
    {land:'land-2.png', title:'Plots 2'}
  ]
  return (
    <>
      <div className="flex flex-col space-y-5 p-5 w-full justify-center">
        <div className="flex w-full justify-center">
          <Image 
            src={'/title.png'}
            width={100}
            height={100}
            alt="tasks.png"
            className="w-full h-auto"
          />
          <div className="absolute mt-4 ">
            <div className="flex text-center items-center w-full justify-center gap-5">
              <p className="text-white text-2xl font-bold">Plough Your land</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-5 pb-24">
          <div className="flex flex-col gap-3 px-2 w-full justify-center">
            {
              myLand.map((land:any, index: number) =>(
                <div
                  key={index}
                  className="relative flex  bg-cover bg-center flex-col items-center" 
                  style={{ backgroundImage: 'url(/table_2.png)', width:'100%', height:'100%', backgroundSize:'100% 100%' }}
                >
                  <div className="mt-10">
                    <div className="flex flex-col space-y-1">
                      <p className="font-bold text-center">{land.title}</p>
                      <div className="grid items-center justify-center">
                        <Image 
                          src={`${'/'}${land.land}`} 
                          width={100} 
                          height={100} 
                          alt={land.land} 
                          className="w-full h-auto"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-2 pb-10">
                        {mylandList.map((value: any, index: number) => (
                          <Image 
                            key={index} 
                            src={`${'/'}${value.title}`} 
                            width={100} 
                            height={100} 
                            alt={value.title} 
                            className="w-full h-auto"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export { CardList, OtherCard, ReferralCard, TaskCard, InventoryCard, MyLandCard }