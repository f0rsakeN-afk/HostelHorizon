import React, { useState } from 'react';
import Title from '../ui/Title';
import StudentTable from '../features/students/StudentTable';
import CreateStudentsForm from '../features/students/CreateStudentsForm';

const Students = () => {
  const [show, setShow] = useState(false);
  return (
    <div data-aos='zoom-in'>
      <Title text={`All students`} />
      <StudentTable />
      <section className="py-4 text-center">
        <button
          className="rounded-lg  bg-[#4338ca] px-4 py-2 text-xl font-semibold tracking-wide   text-gray-200 ring-offset-2 transition-all duration-300 ease-linear  focus:outline-none focus:ring focus:ring-[#4338ca] dark:text-gray-200  "
          onClick={() => setShow(!show)}
        >
          {show?'Close form':'Add student'}
        </button>
      </section>
      {show && <CreateStudentsForm />}
    </div>
  );
};

export default Students;
