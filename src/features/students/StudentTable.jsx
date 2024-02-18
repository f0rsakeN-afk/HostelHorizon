import React from 'react';
import { getStudents } from './Student';
import { Spinner } from 'keep-react';
import StudentRow from './StudentRow';

function StudentTable() {
  const { isLoading, students } = getStudents();
  if (isLoading) return <Spinner />;
  return (
    <div>
      <div className="text-md grid grid-cols-4 items-center justify-center gap-2 pb-2 font-semibold text-gray-700 dark:text-gray-200">
        <div className="">StudentId</div>
        <div className="">Created At</div>
        <div className="">Name</div>
        <div className="">Email Address</div>
      </div>
      {students.map((sts) => (
        <StudentRow sts={sts} key={sts.id} />
      ))}
    </div>
  );
}

export default StudentTable;
