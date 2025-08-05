import { db } from '@/lib/db'
import DevoteesTable from './devootes'

const DevoteesPage = async () => {
    const data = await db.dhoopaDeeparatiRegistration.findMany({
        orderBy: { createdAt: 'asc' },
    })

    return (
        <div>
            <DevoteesTable data={data} />
        </div>
    )
}

export default DevoteesPage
