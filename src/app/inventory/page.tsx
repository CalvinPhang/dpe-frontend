// 'use client'
import React, { useState, useEffect } from 'react';
import { fetchContainerConditions, fetchContainerTypes, fetchContainers, fetchSuppliers } from '@/services';
import { ContainerTable, AddContainer } from '@/components';

export default async function Inventory() {
    const allContainers = await fetchContainers();
    const containerTypes = await fetchContainerTypes();
    const containerConditions = await fetchContainerConditions();
    const suppliers = await fetchSuppliers();

    return (
        <div className='flex min-h-screen'>
            <div className='max-2xl:container max-2xl:mx-auto mx-4 mt-20 mb-4 p-4 rounded-md bg-[#161d21]'>
                <AddContainer 
                    container_types={containerTypes} 
                    container_conditions={containerConditions} 
                    suppliers={suppliers}
                />
                <ContainerTable containers={allContainers}/>
            </div>
        </div>
    )
  }