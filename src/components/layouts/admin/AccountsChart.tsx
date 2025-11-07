// prettier-ignore
"use client"

import { Ellipsis } from 'lucide-react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Student', value: 400, color: '#0088FE' },
  { name: 'Teacher', value: 100, color: '#00C49F' },
  { name: 'Parent', value: 500, color: '#FFBB28' },
  { name: 'Other', value: 50, color: '#FF8042' },
]

const AccountsChart = () => {
  return (
    <div className='w-full h-full border rounded-sm shadow'>
      <div className='flex-center justify-between p-3'>
        <h3>Accounts</h3>
        <span>
          <Ellipsis />
        </span>
      </div>
      <div className='relative w-full h-[200px]'>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              cx='50%'
              cy='50%'
              data={data}
              innerRadius={40}
              outerRadius={80}
              fill='#8884d8'
              paddingAngle={1}
              dataKey='value'
            >
              {data.map((item, index) => (
                <Cell key={`cell-${index}`} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className='grid grid-cols-2 mx-auto'>
        {data.map((item, index) => (
          <div key={index} className='flex-center'>
            <div className=' w-3.5 h-3.5 rounded-xs' style={{ backgroundColor: `${item.color}` }}></div>
            <p className='ml-2'>
              {item.name} <span>({item.value})</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AccountsChart
