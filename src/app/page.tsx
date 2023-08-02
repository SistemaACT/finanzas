"use client"
import React from "react"
import Option from '../../components/Option'
import {BsCreditCard2Back} from "react-icons/bs"
import {MdPointOfSale} from "react-icons/md"
import {BsBank2} from "react-icons/bs"
import {GiPiggyBank} from "react-icons/gi"
import {HiBanknotes} from "react-icons/hi2"
import {HiReceiptTax} from "react-icons/hi"
import Area from "../../components/Area"

export default function Home() {
  const [area, setArea] = React.useState<undefined|string>(undefined)

  return (
    <div className='w-full md:w-1/2'>
      <div className='w-full'>
        <Option label='Purchase' Icon={<BsCreditCard2Back></BsCreditCard2Back>} onClick={setArea} Area="Purchase"/>
        <Option label='Sales' Icon={<MdPointOfSale></MdPointOfSale>} onClick={setArea} Area="Sales"/>
        <Option label='Banking' Icon={<BsBank2></BsBank2>} onClick={setArea} Area="Banking"/>
        <Option label="Debt" Icon={<GiPiggyBank/>} onClick={setArea} Area="Debt"/>
        <Option label='Capital' Icon={<HiBanknotes/>} onClick={setArea} Area="Capital"/>
        <Option label='Taxes' Icon={<HiReceiptTax/>} onClick={setArea} Area="Taxes"/>
      </div>
      <div className="w-full my-2 border border-black rounded">
        <Area area={area} setArea={setArea}></Area>
      </div>
    </div>

  )
}
