'use client'
import { SoldTable, SoldToolbar } from '@/components';

const SoldMain = ({containers}:any) => {
  return (
    <div className='max-2xl:container max-2xl:mx-auto mx-4 mt-20 mb-4 p-4 rounded-md bg-[#161d21]'>
        <SoldToolbar 
            // container_types={...container_types} 
            // container_conditions={...container_conditions} 
            // suppliers={...suppliers}
            // selected_products={selectedProducts}
        />
        <SoldTable 
            containers={...containers}
        //   select_products={setSelectedProducts}
        //   selected_products={selectedProducts}
        />
    </div>
  )
}

export default SoldMain