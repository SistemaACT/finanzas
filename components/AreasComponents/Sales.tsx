import React, {ReactNode} from 'react'
import {MdPointOfSale} from "react-icons/md"
import {GiReceiveMoney, GiCash} from "react-icons/gi"
import Option from '../Option'
import { Group } from '../Reciclables/groups'

export default function Sales() {
    const [section, setSection] = React.useState<undefined|string>(undefined)
  return (
    <div>
        {section === undefined && <SalesOptions onClick={setSection}></SalesOptions>}
        {section !== undefined && HandleSection[section]}
    </div>
  )
}

function SalesOptions({onClick}:{onClick:(e:string)=>void}){
    return(
        <>
        <Group label='Sales' Icon={<MdPointOfSale/>}>
            <Option label='Generate Sale' Area="Generate Sale" onClick={onClick} Icon={<MdPointOfSale></MdPointOfSale>}/>
        </Group>  
            <Option label='Accounts Receivable' Area="Accounts Receivable" onClick={onClick} Icon={<GiReceiveMoney></GiReceiveMoney>}/>
            <Option label='Pay Receivable' Area="Pay Receivable" onClick={onClick} Icon={<GiCash></GiCash>}/>
        </>
    )
}



let HandleSection: {[key:string]:ReactNode} = {
    "Generate Sale": <GenerateSale></GenerateSale>

}


function GenerateSale(){
    return(<></>)
}