import { createCategoryPage } from '@/app/actions'
import CreationBottomBar from '@/app/components/CreationBottomBar'
import SelectedCategory from '@/app/components/SelectedCategory'
import React from 'react'

const StructurePage = ({ params }: { params: { id: string } }) => {
  return (
    <>
        <div className="md:w-3/5 w-full mx-auto">
            <h2 className='text-3xl font-semibold tracking-tight transition-colors px-4'>Which of these best describe your Home!</h2>
        </div>

        <form action={createCategoryPage}>
            <input type="hidden" name="homeId" value={params.id} />
            <SelectedCategory />

            <CreationBottomBar />
        </form>
    </>
  )
}

export default StructurePage