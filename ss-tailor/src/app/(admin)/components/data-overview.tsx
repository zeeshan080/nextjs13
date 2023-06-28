import React from 'react'
import CustomDataCard from './ui/custom-data-card'
import { Package } from 'lucide-react'
import { CreditCard } from 'lucide-react'
import { DollarSign } from 'lucide-react'
import { Truck } from 'lucide-react'


type Props = {}

export default function DataOverview({}: Props) {
  return (
    <div className='grid md:grid-cols-2  lg:grid-cols-4 gap-6'>
        <CustomDataCard title={'Orders'} icon={<Truck className='w-5 h-5'/>} amount={100} info={'+50% increase from last month'}/>
        <CustomDataCard title={'Total Revenue'} symbol='Rs' icon={<DollarSign className='w-5 h-5'/>} amount={13400} info={'+50% increase from last month'}/>
        <CustomDataCard title={'Sales'} symbol='Rs' icon={<CreditCard className='w-5 h-5'/>} amount={32000} info={'+50% increase from last month'}/>
        <CustomDataCard title={'Stock'} icon={<Package className='w-5 h-5'/>} amount={80} info={'+50% increase from last month'}/>
    </div>
  )
}