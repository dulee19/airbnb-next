import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import CreationSubmit from './SubmitButtons'

const CreationBottomBar = () => {
  return (
    <div className="fixed w-full bottom-0 z-10 bg-white border-t h-24">
        <div className="flex items-center justify-between mx-auto lg:px-10 h-full">
            <Button variant="secondary" size="lg" asChild>
                <Link href="/">Cancel</Link>
            </Button>
            <CreationSubmit />
        </div>
    </div>
  )
}

export default CreationBottomBar