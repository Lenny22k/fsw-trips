import { TripItem } from '@/components/TripItem'
import { prisma } from '@/lib/prisma'
import { Trip } from '@prisma/client'

async function getTrips() {
  const trips = await prisma.trip.findMany({})

  return trips
}

export async function RecommendedTrips() {
  const data = await getTrips()

  return (
    <div className="container mx-auto p-5">
      <div className="w-full h-[1px] bg-grayLighter"></div>
      <h2 className="font-medium text-grayPrimary whitespace-nowrap px-5">
        Destinos Recomendados
      </h2>
      <div className="w-full h-[1px] bg-grayLighter"></div>

      <div className="flex flex-col items-center mt-5 gap-5">
        {data.map((trip: Trip) => (
          <TripItem key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  )
}
