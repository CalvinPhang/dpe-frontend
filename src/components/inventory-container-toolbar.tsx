'use client'

import { useRouter } from "next/navigation";

import { useState, useTransition, useRef } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Toast } from 'primereact/toast';
import { Toolbar } from 'primereact/toolbar';


const InventoryToolbar = ({container_types, container_conditions, suppliers, selected_products}: any) => {
    const [visible, setVisible] = useState(false);
    const [containerId, setContainerId] = useState('');
    const [selectedType, setSelectedType] = useState<HTMLInputElement>();
    const [selectedSupplier, setSelectedSupplier] = useState<HTMLInputElement>();
    const [selectedCondition, setSelectedCondition] = useState<HTMLInputElement>();
    const [priceIdr, setPriceIdr] = useState('');
    const [priceUsd, setPriceUsd] = useState('');

    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    const toast = useRef<Toast>(null);

    const showSubmitSuccess = (container_id: string) => {
        toast.current?.show({ severity: 'success', summary: 'Submit Success', detail: 'Container ' + container_id + ' Submitted'});
    };

    const showSoldSuccess = (container_id: string) => {
        toast.current?.show({ severity: 'success', summary: 'Container Sold', detail: 'Container ' + container_id + ' Sold'});
    };


    const refreshData = () => {
        startTransition(() => {
            router.refresh();
        });
    }


    const containerTypeParse = (type: any) => {
        return {
            name: type.code,
            id: type.id
        }
    }

    const container_types_dropdown = container_types.map((k: any)=> containerTypeParse(k))

    const containerConditionParse = (condition: any) => {
        return {
            name: condition.condition,
            id: condition.id
        }
    }

    const container_conditions_dropdown = container_conditions.map((k: any)=> containerConditionParse(k))

    const supplierParse = (supplier: any) => {
        return {
            name: supplier.name,
            id: supplier.id
        }
    }

    const suppliers_dropdown = suppliers.map((k: any)=> supplierParse(k))



    const handleSubmit = async (event:any) => {
        event.preventDefault()

        const data = {
            container_id: containerId.replace(/\s/g, ""),
            type: selectedType!.id,
            condition: selectedCondition!.id,
            supplier: selectedSupplier!.id,
            buy_price_idr: priceIdr,
            buy_price_us: priceIdr,
        }

        const JSONdata = JSON.stringify(data)

        const endpoint = process.env.BASE_URL + '/api/v1/containers'

        console.log(data)
        setVisible(false)

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }

        const response = await fetch(endpoint, options)
        
        const result = await response.json()
        
        refreshData()
        
        showSubmitSuccess(containerId.replace(/\s/g, ""))
    }

    const handleSell = async () => {
        for (const element of selected_products) {
            console.log(element.container_id)

            const data = {
                is_sold: 1
            }
    
            const JSONdata = JSON.stringify(data)

            const endpoint = process.env.BASE_URL + '/api/v1/containers/' + element.container_id

            const options = {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSONdata,
            }
    
            const response = await fetch(endpoint, options)
            
            const result = await response.json()
            showSoldSuccess(element.container_id)
        }

        refreshData()
    }

    const leftToolbarTemplate = () => {
        return (
            <div className="flex flex-wrap gap-2">
                <Button label="Add" icon="pi pi-plus" iconPos="right" onClick={() => setVisible(true)}/>
            </div>
        );
    };

    const rightToolbarTemplate = () => {
        return <Button label="Sell" icon="pi pi-cart-plus" severity="success" onClick={handleSell}/>;
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast} position="bottom-left"/>
            <Toolbar className="mb-4 w-full" start={leftToolbarTemplate} end={rightToolbarTemplate}></Toolbar>
            <Dialog header="New Container" visible={visible} style={{ width: '30vw' }} breakpoints={{ '1600px':'40vw', '1080px':'50vw', '960px': '65vw', '641px': '100vw' }} onHide={() => setVisible(false)} >
                <form id="input_container" className="grid grid-cols-1 gap-8 place-items-center pt-6" onSubmit={handleSubmit}>
                    <div className="p-float-label w-64">
                        <InputText id="container_no" value={containerId} onChange={(e) => setContainerId(e.target.value)} className="w-full" required/>
                        <label htmlFor="container_no">Container Number</label>
                    </div>
                    <div className="p-float-label w-64">
                        <Dropdown inputId="type" value={selectedType} onChange={(e) => setSelectedType(e.value)} options={container_types_dropdown} optionLabel="name" className="w-full" required/>
                        <label htmlFor="type">Type</label>
                    </div>
                    <div className="p-float-label w-64">
                        <Dropdown inputId="supplier" value={selectedSupplier} onChange={(e) => setSelectedSupplier(e.value)} options={suppliers_dropdown} optionLabel="name" className="w-full" required/>
                        <label htmlFor="supplier">Supplier</label>
                    </div>
                    <div className="p-float-label w-64">
                        <Dropdown inputId="condition" value={selectedCondition} onChange={(e) => setSelectedCondition(e.value)} options={container_conditions_dropdown} optionLabel="name" className="w-full" required/>
                        <label htmlFor="condition">Condition</label>
                    </div>
                    <div className="p-float-label w-64">
                        <InputText id="price_idr" value={priceIdr} onChange={(e) => setPriceIdr(e.target.value)} className="w-full "/>
                        <label htmlFor="price_idr">Price IDR</label>
                    </div>
                    <div className="p-float-label w-64">
                        <InputText id="price_usd" value={priceUsd} onChange={(e) => setPriceUsd(e.target.value)} className="w-full" />
                        <label htmlFor="price_usd">Price USD</label>
                    </div>
                    <Button label="Submit" type="submit"/>
                </form>
            </Dialog>
        </div>
    )
}

export default InventoryToolbar