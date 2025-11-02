import Image from 'next/image'
import { Button } from '../ui/button'
import { X } from 'lucide-react'

const ModalHeader = () => {
  return (
    <header className='relative w-full flex-center'>
      {/* <Image src={checklist} width={70} height={70} alt="icon" /> */}
      <div className='flex flex-col ml-2'>
        <span className='text-3xl font-semibold'>Create a new campus</span>
        <span className='text-sm'>This form allows you to submit a request for establishing a new campus.</span>
      </div>
      <Button variant='ghost' className='absolute top-0 right-0 h-8 w-8 p-0'>
        <X size={22} />
      </Button>
    </header>
  )
}

export default ModalHeader
