import React from 'react';
import { getStudents } from './Student';

function StudentTable() {
  const { isloading, students } = getStudents();
    return <div>
        <div className="">
            
      </div>
  </div>;
}

export default StudentTable;
