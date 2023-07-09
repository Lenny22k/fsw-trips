import { prisma } from '@/lib/prisma'
import Image from 'next/image'
import { TripHeader } from './components/TripHeader'

const getTripsDetails = async (tripId: string) => {
  const trip = await prisma.trip.findUnique({
    where: {
      id: tripId
    }
  })

  return trip
}

export async function TripDetails({ params }: { params: { tripId: string } }) {
  const trip = await getTripsDetails(params.tripId)

  if (!trip) return null

  return (
    <div className="container mx-auto">
      <TripHeader trip={trip}/>
    </div>
  )
}