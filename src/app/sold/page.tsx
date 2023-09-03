import { fetchSoldContainers } from "@/services"
import { SoldMain } from "@/components"

export default async function Sold() {
    const allContainers = await fetchSoldContainers();

    return (
      <div className='flex min-h-screen'>
            <SoldMain 
                containers={allContainers}
                // container_types={containerTypes} 
                // container_conditions={containerConditions} 
                // suppliers={suppliers}
            />
      </div>
    )
  }