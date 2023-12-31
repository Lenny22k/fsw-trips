'use client'

import Button from '@/components/Button'
import DatePicker from '@/components/DatePicker'
import Input from '@/components/Input'
import CurrencyInput from 'react-currency-input-field'

export function TripSearch() {
  return (
    <div className="container mx-auto p-5">
      <h1 className="font-semibold text-2xl text-primaryDarker text-center ">
        Encontre sua próxima <span className="text-primery">viagem!</span>
      </h1>

      <div className="flex flex-col gap-4 mt-5">
        <Input placeholder="Onde você quer ir?" />
      </div>

      <div className="flex gap-4">
        <DatePicker
          placeholderText="Data de ida"
          onChange={() => {}}
          className="w-full"
        />
        <CurrencyInput placeholder="Orçamento" /> 
      </div>

      <Button>Buscar</Button>
    </div>
  )
}
