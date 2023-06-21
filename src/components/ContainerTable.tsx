'use client'

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
 
const ContainerTable = ( {containers}: any ) => {
  return (    
    <div className='container mx-auto mt-20 mb-4 p-4 rounded-md bg-[#161d21]'>
        <Button label="Add" icon="pi pi-plus" iconPos="right" />
        <DataTable value={containers} stripedRows tableStyle={{ minWidth: '50rem' }}>
            <Column field="load_date" header="DATE"></Column>
            <Column field="container_id" header="CONTAINER NO."></Column>
            <Column field="type_code" header="TYPE"></Column>
            <Column field="condition_code" header="CONDITION"></Column>
            <Column field="supplier_code" header="SUPPLIER"></Column>
            <Column field="buy_price_us" header="US$"></Column>
            <Column field="buy_price_idr" header="IDR"></Column>
        </DataTable>
    </div>
)
}

export default ContainerTable