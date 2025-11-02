import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

const SearchBar = () => {
  return (
    <div className='relative'>
      <Search className='absolute left-2 top-1/2 -translate-y-1/2' />
      <Input className='pl-9' placeholder='Search...' />
    </div>
  )
}

export default SearchBar
