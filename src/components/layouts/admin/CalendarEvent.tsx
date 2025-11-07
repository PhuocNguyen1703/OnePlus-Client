// prettier-ignore
"use client"

import { Calendar } from '@/components/ui/calendar'
import { Ellipsis } from 'lucide-react'
import { useState } from 'react'

const events = [
  {
    id: 1,
    title: 'Lorem ipsum dolor',
    time: '12:00 PM - 2:00 PM',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor',
    time: '12:00 PM - 2:00 PM',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor',
    time: '12:00 PM - 2:00 PM',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
]

const CalendarEvent = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className='flex flex-col rounded-md border shadow'>
      <Calendar
        mode='single'
        selected={date}
        onSelect={setDate}
        classNames={{
          months: 'flex flex-col space-y-4 sm:space-x-4 sm:space-y-0',
          head_row: 'flex justify-between',
          row: 'flex justify-between w-full mt-2',
        }}
      />
      <div className='flex-center justify-between p-3'>
        <h3>Events</h3>
        <span>
          <Ellipsis />
        </span>
      </div>
      <div className='flex flex-col gap-3 p-3 overflow-y-auto'>
        {events.map((event) => (
          <div
            className='p-2 rounded-md border border-gray-200 border-t-4 odd:border-t-orange-900 even:border-t-blue-900 shadow'
            key={event.id}
          >
            <div className='flex items-center justify-between'>
              <h4 className='font-semibold text-gray-600'>{event.title}</h4>
              <span className='text-gray-400 text-sm'>{event.time}</span>
            </div>
            <p className='mt-2 text-gray-400 text-sm line-clamp-2'>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CalendarEvent
