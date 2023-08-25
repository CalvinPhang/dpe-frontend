import { fetchContainerConditions, fetchContainerTypes, fetchContainers, fetchSuppliers } from '@/services';
import { InventoryMain } from '@/components';

export default async function Inventory() {
    const allContainers = await fetchContainers();
    const containerTypes = await fetchContainerTypes();
    const containerConditions = await fetchContainerConditions();
    const suppliers = await fetchSuppliers();

    return (
        <div className='flex min-h-screen'>
            <InventoryMain 
                containers={allContainers}
                container_types={containerTypes} 
                container_conditions={containerConditions} 
                suppliers={suppliers}
            />
        </div>
    )
  }