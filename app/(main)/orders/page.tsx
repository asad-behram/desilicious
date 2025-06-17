'use client'

import { isSessionCookiePresent } from '@/common/helper';
import Grid from '@/components/Grid';
import { Button } from 'antd'
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react'
import columnsData from './columns.json';
import KebabMenu from '@/components/KebabMenu';

const Orders = () => {
  //constants
  const router = useRouter();
  const menuItems = [
    {
      key: 'markCompleted',
      label: 'Mark Completed',
    },
  ];

  const columns = columnsData.map(column => ({
    ...column,
    render: column.key === 'action'
      ? (_: any, record: any) => (
          <span>
            <KebabMenu
              actions={menuItems}
              context={record.id}
              handleSelection={handleSelection}
            />
          </span>
        )
      : null,
  }));

  const handleSelection = (key: string, context: string) => {
    if (key === 'markCompleted') {
      console.log(`Marking order ${context} as completed`);
      // Add your logic to mark the order as completed
    }
  };

useEffect(() => {
  if (!isSessionCookiePresent()) {
    router.push('/login');
  }
}, [])
return (
  <>
    <h1 className="text-2xl font-bold mb-4">Orders</h1>
    <p className="mb-4">Manage Orders.</p>
    <div className="text-right mb-4">
      <Button
        icon={<Plus />}
        type="primary"
        onClick={() => router.push('/items/create')}
      >
        Add New
      </Button>
    </div>
    <Grid
      dataSource={[]}
      columns={columns}
    />
  </>
)
}

export default Orders