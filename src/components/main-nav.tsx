'use client'

import { Menubar } from 'primereact/menubar';

const MainNav = () => {
  const items = [
    {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-home',
        url: '/dashboard',
    },
    {
        label: 'Inventory',
        icon: 'pi pi-fw pi-box',
        url: '/inventory',
    },
    {
        label: 'Sold',
        icon: 'pi pi-fw pi-dollar',
        url: '/sold',
    },
    {
        label: 'Rent',
        icon: 'pi pi-fw pi-clock',
        url: '/rent',
    },
  ];

  const start = <span className='text-xl p-5 font-bold'>DPE</span>;

  return (
      <div className="card fixed w-screen z-[9999]">
          <Menubar model={items} start={start} />
      </div>
  )
}

export default MainNav