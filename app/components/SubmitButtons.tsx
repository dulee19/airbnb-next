"use client"

import { Button } from '@/components/ui/button'
import { Heart, Loader } from 'lucide-react'
import React from 'react'
import { useFormStatus } from 'react-dom'

const CreationSubmit = () => {
    const { pending } = useFormStatus();

  return (
    <>
        {pending ? (
            <Button disabled size="lg">
                <Loader className='mr-2 h-4 w-4 animate-spin' />
                Please wait
            </Button>
        ) : (
            <Button type="submit" size="lg">Next</Button>
        )}
    </>
  )
}

export default CreationSubmit

export function AddToFavoriteButton() {
    const { pending } = useFormStatus();

    return (
        <>
            {pending ? (
                <Button type="submit" variant="outline" disabled size="icon" className="bg-primary-foreground">
                    <Loader className='h-4 w-4 animate-spin text-primary' />
                </Button>
            ): (
                <Button type="submit" variant="outline" size="icon" className="bg-primary-foreground">
                    <Heart className='w-4 h-4' />
                </Button>
            )}
        </>
    )
}

export function DeleteFromFavoriteButton() {
    const { pending } = useFormStatus();

    return (
        <>
            {pending ? (
                <Button type="submit" variant="outline" disabled size="icon" className="bg-primary-foreground">
                    <Loader className='h-4 w-4 animate-spin text-primary' />
                </Button>
            ): (
                <Button type="submit" variant="outline" size="icon" className="bg-primary-foreground">
                    <Heart className='w-4 h-4 text-primary' fill='#E21C49' />
                </Button>
            )}
        </>
    )
}

export function ReservationSubmitButton() {
    const { pending } = useFormStatus()

    return (
        <>
            {pending ? (
                <Button className='w-full' disabled>
                    <Loader className='w-4 h-4 animate-spin mr-2' /> Please wait...
                </Button>
            ) : (
                <Button className='w-full' type='submit'>
                    Make a Reservation!
                </Button>
            )}
        </>
    )
}