'use client'

import { useState } from 'react';
import { DataTable, DataTableFilterMeta } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { FilterMatchMode } from 'primereact/api';
 
const InventoryTable = ( {containers, select_products, selected_products }: any) => {

  const [filters, setFilters] = useState<DataTableFilterMeta>({
      container_id: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
      load_date: { value: null, matchMode: FilterMatchMode.CONTAINS },
      type_code: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
      condition_code: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
      supplier_code: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
      buy_price_us: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
      buy_price_idr: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  });

  return (  
    <>
      <DataTable value={containers} stripedRows tableStyle={{ minWidth: '50rem' }} paginator rows={10} dataKey='id' filters={filters} filterDisplay='row' selection={selected_products!}
      onSelectionChange={(e) => select_products(e.value)}>
          <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
          <Column field="load_date" header="DATE" sortable filter filterPlaceholder='Search Date' style={{ minWidth: '200px' }}></Column>
          <Column field="container_id" header="CONTAINER NO." filter filterPlaceholder='Search Container' style={{ minWidth: '200px' }}></Column>
          <Column field="type_code" header="TYPE" filter filterPlaceholder='Search Type' style={{ minWidth: '200px' }}></Column>
          <Column field="condition_code" header="CONDITION" filter filterPlaceholder='Search Condition' style={{ minWidth: '200px' }}></Column>
          <Column field="supplier_code" header="SUPPLIER" filter filterPlaceholder='Search Supplier' style={{ minWidth: '200px' }}></Column>
          <Column field="buy_price_us" header="US$" sortable filter filterPlaceholder='Search Price USD' style={{ minWidth: '200px' }}></Column>
          <Column field="buy_price_idr" header="IDR"  sortable filter filterPlaceholder='Search Price IDR' style={{ minWidth: '200px' }}></Column>
      </DataTable>
    </> 
)
}

export default InventoryTable