import React from 'react';
import { Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { EllipsisVertical } from 'lucide-react';

const KebabMenu = ({ actions, handleSelection , context}: { actions: any, handleSelection: any, context: string}) => {  
  const items: MenuProps['items'] = actions;
  const onClickHandler = (info: any) => {
    handleSelection(info, context);  // Pass both selected action key and context
  };

  return (
    <Dropdown menu={{items, onClick: onClickHandler}} trigger={['click']}>
      <button className="button cursor-pointer rounded-full">
        <EllipsisVertical className='h-14 title-icon !border-none !pr-0 !pl-5' />
      </button>
    </Dropdown>
  );
};

export default KebabMenu;
