import Dishes from '@/features/menus/components/Dishes'
import DishesCategory from '@/features/menus/components/DishesCategory'

const MenuManage = () => {
  return (
    <section className='flex h-full'>
      <DishesCategory />
      <Dishes />
    </section>
  )
}

export default MenuManage
