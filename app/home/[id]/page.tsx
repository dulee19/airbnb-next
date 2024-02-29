import React from 'react'

import prisma from '@/lib/db'
import Image from 'next/image'
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import CategoryShowcase from '@/app/components/CategoryShowcase';
import { createReservation } from '@/app/actions';
import { HomeMap } from '@/app/components/HomeMap';
import { Button } from '@/components/ui/button';
import SelectCalendar from '@/app/components/SelectCalendar';
import { useCountries } from '@/lib/getCountries'
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ReservationSubmitButton } from '@/app/components/SubmitButtons';
import { unstable_noStore as noStore } from 'next/cache'

async function getData(homeId: string) {
    noStore();
    const data = await prisma.home.findUnique({
        where: {
            id: homeId
        },
        select: {
            photo: true,
            description: true,
            guests: true,
            bedrooms: true,
            bathrooms: true,
            title: true,
            categoryName: true,
            price: true,
            country: true,
            Reservation: {
                where: {
                    homeId: homeId
                }
            },
            User: {
                select: {
                    profileImage: true,
                    firstName: true
                }
            }
        }
    })
    return data
}

const HomePage = async ({ params }: { params: { id: string } }) => {
    const data = await getData(params.id);
    const { getCountryByValue } = useCountries();
    const country = getCountryByValue(data?.country as string);
    const { getUser } = getKindeServerSession()
    const user = await getUser()

  return (
    <div className='md:w-[75%] w-full mx-auto mt-10 mb-12 px-4'>
        <h1 className='font-medium text-2xl mb-5'>{data?.title}</h1>
        <div className="relative md:h-[550px] h-72">
            <Image 
                src={`https://ludjngqskkpsyapwtrcd.supabase.co/storage/v1/object/public/images/${data?.photo}`}
                alt="Home"
                fill
                className='rounded-lg h-full w-full object-cover'
            />
        </div>

        <div className="flex justify-between gap-x-24 mt-8 md:flex-nowrap flex-wrap">
            <div className="md:w-2/3 w-full px-4">
                <h3 className='text-xl font-medium'>{country?.flag} {country?.label} / {country?.region}</h3>
                <div className="flex gap-x-2 text-muted-foreground">
                    <p>{data?.guests} Guests</p> * 
                    <p>{data?.bedrooms} Bedrooms</p> * 
                    <p>{data?.bathrooms} Bathrooms</p>
                </div>

                <div className="flex items-center mt-6">
                    <Image 
                        src={
                        data?.User?.profileImage ??
                        "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                        }
                        alt="User"
                        width={45}
                        height={45}
                        className='rounded-full'
                    />
                    <div className="flex flex-col ml-4">
                        <h3 className='font-medium'>Hosted by {data?.User?.firstName}</h3>
                    </div>
                </div>

                <Separator className='my-7' />

                <CategoryShowcase categoryName={data?.categoryName as string} />

                <Separator className='my-7' />

                <p className='text-muted-foreground'>{data?.description}</p>

                <Separator className='my-7' />

                <HomeMap locationValue={country?.value as string} />
            </div>

            <form action={createReservation}>
                <input type="hidden" name="homeId" value={params.id} />
                <input type="hidden" name="userId" value={user?.id} />
                <SelectCalendar reservation={data?.Reservation} />

                {user?.id ? (
                    <ReservationSubmitButton />
                ) : (
                    <Button className="w-full" asChild>
                        <Link href="/api/auth/login">Login to make a reservation</Link>
                    </Button>
                )}
            </form>
        </div>
    </div>
  )
}

export default HomePage