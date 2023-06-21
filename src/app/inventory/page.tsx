// 'use client'
import React, { useState, useEffect } from 'react';
import { fetchContainers } from '@/services';
import { ContainerTable } from '@/components';

export default async function Inventory() {
    const allContainers = await fetchContainers();

    return (
        <div className='flex min-h-screen'>
            <ContainerTable containers={allContainers} />
        </div>
    )
  }