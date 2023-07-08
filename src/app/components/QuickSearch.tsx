import Image from 'next/image'

export function QuickSearch() {
  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center">
        <div className="w-full h-[1px] bg-grayLighter"></div>
        <h2 className="font-medium text-grayPrimary whitespace-nowrap px-5">
          Tente pesquisar por
        </h2>
        <div className="w-full h-[1px] bg-grayLighter"></div>

        <div className="flex w-full justify-between mt-5">
          <div className="flex flex-col items-center gap-1">
            <Image width={35} height={35} src="/hotel--icon" alt="oi" />

            <p className="text-sm text-grayPrimary">Hotel</p>
          </div>

          <div className="flex flex-col items-center gap-1">
            <Image width={35} height={35} src="/hotel--icon" alt="oi" />

            <p className="text-sm text-grayPrimary">Fazenda</p>
          </div>

          <div className="flex flex-col items-center gap-1">
            <Image width={35} height={35} src="/hotel--icon" alt="oi" />

            <p className="text-sm text-grayPrimary">Chalé</p>
          </div>

          <div className="flex flex-col items-center gap-1">
            <Image width={35} height={35} src="/hotel--icon" alt="oi" />

            <p className="text-sm text-grayPrimary">Pousada</p>
          </div>
        </div>
      </div>
    </div>
  )
}
