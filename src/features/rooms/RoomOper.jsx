import React from 'react';
import { FaAnglesDown } from 'react-icons/fa6';
import { FaAngleDoubleUp } from 'react-icons/fa';
import Filter from '../../ui/Filter';

const RoomOper = () => {
  return (
    <div className="">
      <Filter
        filterField="price"
        options={[
          { value: 'all', label: 'All' },
          { value: 'price-inc', label: 'Low-High',icon:<FaAngleDoubleUp/>},
          { value: 'price-dec', label: 'High-Low',icon:<FaAnglesDown/>},
        ]}
      />
    </div>
  );
};

export default RoomOper;
