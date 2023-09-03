'use client'

import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';


const SoldToolbar = () => {
    const leftToolbarTemplate = () => {
        return (
            <div className="flex flex-wrap gap-2">
                <Button label="Add" icon="pi pi-plus" iconPos="right"/>
            </div>
        );
    };
    
    const rightToolbarTemplate = () => {
        return <Button label="Sell" icon="pi pi-cart-plus" severity="success"/>;
    };

    return (
        <div className="card flex justify-content-center">
            <Toolbar className="mb-4 w-full" start={leftToolbarTemplate} end={rightToolbarTemplate}></Toolbar>
        </div>
    )
}

export default SoldToolbar