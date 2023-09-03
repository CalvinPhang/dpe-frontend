'use client'

import { useState } from 'react';
import { InventoryTable, InventoryToolbar } from '@/components';
import { Button } from 'primereact/button';

const InventoryMain = ({containers, container_types, container_conditions, suppliers}: any) => {
  const [selectedProducts, setSelectedProducts] = useState<any>(null);

  return (
    <div className='max-2xl:container max-2xl:mx-auto mx-4 mt-20 mb-4 p-4 rounded-md bg-[#161d21]'>
        <InventoryToolbar 
            container_types={...container_types} 
            container_conditions={...container_conditions} 
            suppliers={...suppliers}
            selected_products={selectedProducts}
        />
        <InventoryTable containers={...containers}
          select_products={setSelectedProducts}
          selected_products={selectedProducts}
        />
    </div>
  )
}

export default InventoryMain