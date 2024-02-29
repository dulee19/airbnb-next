import React from 'react'
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Link from 'next/link';
import { createAirbnbHome } from '../actions';


const UserNav = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser()

    const createHomeWithId = createAirbnbHome.bind(null, {
        userId: user?.id as string
    })
  return (
    <DropdownMenu>
        <DropdownMenuTrigger>
            <div className="rounded-full border px-2 py-2 lg:px-4 lg:py-2 flex items-center gap-x-3">
                <MenuIcon className='w-6 h-6 lg:w-5 lg:h-5' />

                <Image 
                    src={
                    user?.picture ??
                    "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                    }
                    alt="user"
                    width={30}
                    height={30}
                    className="rounded-full hidden lg:block"
                />
            </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className='w-[200px]'>
            {user ? (
                <>
                <DropdownMenuItem>
                    <form action={createHomeWithId} className="w-full">
                        <button type="submit" className="w-full text-start">
                            Airbnb your home
                        </button>
                    </form>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="/my-homes" className='w-full'>My Listings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="/favorites" className='w-full'>My Favorites</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="/reservations" className='w-full'>My Reservation</Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem>
                    <LogoutLink className='w-full'>Logout</LogoutLink>
                </DropdownMenuItem>
                </>
            ) : (
                <>
                <DropdownMenuItem>
                    <RegisterLink className='w-full'>Register</RegisterLink>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <LoginLink className='w-full'>Login</LoginLink>
                </DropdownMenuItem>
                </>
            )}
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserNav