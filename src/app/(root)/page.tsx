import Card from '@/components/layouts/Card'

const Home = () => {
  return (
    <main className='flex flex-col gap-2 md:gap-4 overflow-y-auto'>
      <div className='flex flex-col gap-2 md:gap-4 w-full md:w-3/4'>
        <div className='flex flex-col gap-2'>
          <Card />
        </div>
        {/* <div className="flex gap-4 h-[800px]">
          <div className="flex flex-col gap-4 w-1/3">
            <div className="">
              <AccountsChart />
            </div>
            <div className="flex-1 bg-amber-600"></div>
          </div>
          <div className="flex flex-col gap-4 flex-1">
            <div className="h-1/2 bg-amber-950"></div>
            <div className="flex-1 bg-amber-600"></div>
          </div>
        </div> */}
      </div>
      {/* <div className="flex flex-col gap-4 flex-1">
        <CalendarEvent />
        <div className="flex-1 bg-amber-600"></div>
      </div> */}
    </main>
  )
}

export default Home
