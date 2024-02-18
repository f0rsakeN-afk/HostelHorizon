import React from 'react'
import Title from "../ui/Title"
import StudentTable from '../features/students/StudentTable'

const Students = () => {
  return (
    <div>
      <Title text={`All students`} />
      <StudentTable/>
    </div>
  )
}

export default Students