import Header from '@/features/tables/components/Header'
import TableManager from '@/features/tables/components/TableManager'
import { generateTables } from '@/features/tables/utils/generateTables'

const TableManage = () => {
  const tableList = generateTables(50)

  return (
    <section className='relative'>
      <Header />
      <TableManager initialTables={tableList} />
    </section>
  )
}

export default TableManage
