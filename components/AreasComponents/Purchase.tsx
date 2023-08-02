import React from 'react'
import {MdInventory, MdBusinessCenter, MdShoppingCart} from "react-icons/md"
import Option from '../Option'

export default function Purchase() {
    const [section, setSection] = React.useState<undefined|string>(undefined)
  return (
    <div>
        {section === undefined && <PurchaseOptions onClick={setSection}></PurchaseOptions>}
    </div>
  )
}

function PurchaseOptions({onClick}:{onClick:(e:string)=>void}){
    return(
        <>
        <Option label='Inventory' Area="Inventory" onClick={onClick} Icon={<MdInventory></MdInventory>}/>
        <Option label='Equipment' Area="Equipment" onClick={onClick} Icon={<MdBusinessCenter></MdBusinessCenter>}/>
        <Option label='Personal Purchase' Area="Personal Purchase" onClick={onClick} Icon={<MdShoppingCart></MdShoppingCart>}/>
        </>
    )
}