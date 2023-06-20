'use client'
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { fetchContainers } from '@/services';

export default async function Inventory() {
    const allContainers = await fetchContainers();

    const isDataEmpty = !Array.isArray(allContainers) || allContainers.length < 1 || !allContainers;

    return (
        <div className='grid place-content-center min-h-screen'>
            {!isDataEmpty ? (
                <div className='m-4'>
                    <DataTable value={allContainers} tableStyle={{ minWidth: '50rem' }}>
                        <Column field="load_date" header="DATE"></Column>
                        <Column field="container_id" header="CONTAINER NO."></Column>
                        <Column field="type_code" header="TYPE"></Column>
                        <Column field="condition_code" header="CONDITION"></Column>
                        <Column field="supplier_code" header="SUPPLIER"></Column>
                        <Column field="buy_price_us" header="US$"></Column>
                        <Column field="buy_price_idr" header="IDR"></Column>
                    </DataTable>
                </div>
            ) : (
                <div>
                    <h1>Oops, no results</h1>
                </div>
            )}
        </div>
    )
  }