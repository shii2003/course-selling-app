import Card from "@/components/ui/card";
import db from "@/db/db";
import { formatCurrency, formatNumber } from "@/lib/fomatter";

async function getSalesData() {
    const data = await db.order.aggregate({
        _sum: { pricePaidInRupee: true },
        _count: true
    })
    await Wait(2000)
    return {
        amount: (data._sum.pricePaidInRupee || 0),
        numberOfSales: data._count
    }
}
function Wait(duration: number) {
    return new Promise(resolve => setTimeout(resolve, duration))
}
async function getUserData() {
    const [userCount, orderData] = await Promise.all([
        db.user.count(),
        db.order.aggregate({
            _sum: { pricePaidInRupee: true }
        }),
    ])
    return {
        userCount,
        averageValuePerUser: userCount === 0 ? 0 : (orderData._sum.pricePaidInRupee || 0) / userCount,
    }
}

async function getProductData() {
    const [activeCount, inactiveCount] = await Promise.all([
        db.product.count({ where: { isAvailableForPurchase: true } }),
        db.product.count({ where: { isAvailableForPurchase: false } })
    ])
    return { activeCount, inactiveCount }
}



export default async function AdminDashboard() {
    const [salesData, userData, productData] = await Promise.all([
        getSalesData(),
        getUserData(),
        getProductData()
    ])

    return (

        <div className="flex flex-col gap-4  ">
            <DashboardCard
                title="Sales"
                subtitle={`${formatNumber(salesData.numberOfSales)} Orders`}
                body={formatCurrency(salesData.amount)}
            />
            <DashboardCard
                title="Customers"
                subtitle={`${formatCurrency(userData.averageValuePerUser)} Average Value`}
                body={formatNumber(userData.userCount)}
            />
            <DashboardCard
                title="Active Products"
                subtitle={`${formatNumber(productData.activeCount)} Inactive Products`}
                body={formatNumber(productData.inactiveCount)}
            />
        </div>

    );
}
type DashboardCardProps = {
    title: string
    subtitle: string
    body: string
}
function DashboardCard({ title, subtitle, body }: DashboardCardProps) {
    return (
        <Card
            cardHeader={title}
            cardDescription={subtitle}
            cardContent={body}
        />
    )
}