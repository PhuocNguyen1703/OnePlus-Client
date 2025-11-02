import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { CalendarDays, Edit, Mail, Phone, ShieldEllipsis } from 'lucide-react'

const ProfileCard = () => {
  return (
    <div className='flex'>
      <Avatar className='mt-3 ml-3 size-15 md:size-28'>
        <AvatarImage
          src='https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='avatar'
        />
        <AvatarFallback>?</AvatarFallback>
      </Avatar>
      <div className='ml-5'>
        <h2>Welcome, Admin !</h2>
        <h5 className='text-gray-500 line-clamp-3'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non amet temporibus praesentium hic tenetur sapiente
          qui aliquam illum voluptatibus! Maxime eius quaerat obcaecati doloremque est cum provident beatae, ipsam
          vitae!
        </h5>
        <div className='flex justify-between mt-5'>
          <div className='space-y-2'>
            <span className='flex-center gap-1 text-sm text-gray-700 '>
              <ShieldEllipsis size={20} />
              Admin
            </span>
            <span className='flex-center gap-1 text-sm text-gray-700 '>
              <CalendarDays size={20} />
              November 13, 2025
            </span>
          </div>
          <div className='space-y-2'>
            <span className='flex-center gap-1 text-sm text-gray-700 '>
              <Mail size={20} />
              Admin@/gmail.com
            </span>
            <span className='flex-center gap-1 text-sm text-gray-700 '>
              <Phone size={20} />
              0399999999
            </span>
          </div>
        </div>
      </div>
      <Button variant='ghost' className='h-8 w-8 p-1'>
        <Edit size={20} />
      </Button>
    </div>
  )
}

export default ProfileCard
