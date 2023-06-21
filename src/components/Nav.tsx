'use client'

import { Menubar } from 'primereact/menubar';

const Nav = () => {
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
        label: 'Sell',
        icon: 'pi pi-fw pi-dollar',
        url: '/sell',
    },
    {
        label: 'Rent',
        icon: 'pi pi-fw pi-clock',
        url: '/rent',
    },
  ];

  const start = <span className='text-xl p-5 font-bold'>DPE</span>;

  return (
      <div className="card fixed w-screen">
          <Menubar model={items} start={start} />
      </div>
  )
}

export default Nav