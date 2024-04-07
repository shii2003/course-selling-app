import Button from "@/components/ui/button";
import { PageHeader } from "../_components/PageHeader";
import Link from "next/link";

export default function AdminProductsPage() {
    return (
        <>
            <div className="flex flex-col items-start justify-center">
                <div className="flex justify-between items-center w-full gap-4">
                    <PageHeader>Products </PageHeader>
                    <Button>
                        <Link href='/admin/products/new'> Add Product </Link>
                    </Button>
                </div>
                <div className="flex justify-center w-full">
                    <ProductsTable />
                </div>
            </div>
        </>
    )
}

function ProductsTable() {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th className="px-6 py-3">Product name</th>
                        <th className="px-6 py-3">Price</th>
                        <th className="px-6 py-3">Orders</th>
                    </tr>
                </thead>
            </table>
        </div>
    )

}