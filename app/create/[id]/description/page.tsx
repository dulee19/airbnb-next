import { CreateDescription } from '@/app/actions'
import Counter from '@/app/components/Counter'
import CreationBottomBar from '@/app/components/CreationBottomBar'
import { Card, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const DescriptionPage = ({ params }: { params: { id: string } }) => {
  return (
    <>
    <div className='md:w-3/5 w-full mx-auto'>
      <h2 className='text-3xl font-semibold tracking-tight transition-colors px-4'>Please describe your home as good as you can.</h2>
    </div>

    <form action={CreateDescription}>
      <input type="hidden" name="homeId" value={params.id} />
      <div className="mx-auto md:w-3/5 w-full px-4 mt-10 flex flex-col gap-y-5 mb-36">
        <div className="flex flex-col gap-y-2">
          <Label>Title</Label>
          <Input type="text" name="title" placeholder='Short and simple...' required />
        </div>

        <div className="flex flex-col gap-y-2">
          <Label>Description</Label>
          <Textarea name="description" placeholder='Please describe your home...' required />
        </div>

        <div className="flex flex-col gap-y-2">
          <Label>Price</Label>
          <Input 
            type="number" 
            name="price" 
            placeholder='Price per night in USD' 
            min={10}
            required 
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <Label>Image</Label>
          <Input type="file" name="image" required />
        </div>

        <Card>
          <CardHeader className='flex flex-col gap-y-5'>
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <h3 className='underline font-medium'>Guests</h3>
                <p className='text-muted-foreground text-sm'>How many guests do you want?</p>
              </div>

              <Counter name="guest" />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <h3 className='underline font-medium'>Rooms</h3>
                <p className='text-muted-foreground text-sm'>How many rooms do you have?</p>
              </div>

              <Counter name="room" />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <h3 className='underline font-medium'>Bathrooms</h3>
                <p className='text-muted-foreground text-sm'>How many bathrooms do you have?</p>
              </div>

              <Counter name="bathroom" />
            </div>
          </CardHeader>
        </Card>
      </div>

      <CreationBottomBar />
    </form>
    </>

  )
}

export default DescriptionPage