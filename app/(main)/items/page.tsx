'use client';

import { isSessionCookiePresent } from '@/common/helper';
import Grid from '@/components/Grid';
import { Button } from 'antd';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const Item = () => {
  const router = useRouter();

  useEffect(() => {
    if(!isSessionCookiePresent()) {
      router.push('/login');
    }
  }, [])
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Items</h1>
      <p className="mb-4">Manage your items here.</p>
      <div className="text-right mb-4">
        <Button
          type="primary"
          onClick={() => router.push('/items/create')}
        >
          Create Item
        </Button>
      </div>
      <Grid
        dataSource={[]}
        columns={[]}
      />
    </>
  )
}

export default Item