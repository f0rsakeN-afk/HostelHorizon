import { formatDistanceToNow } from 'date-fns';
import React from 'react';

function StudentRow({ sts }) {
  const { id, name, email, created_at } = sts;
  const formattedDate = formatDistanceToNow(new Date(created_at), {
    addSuffix: true,
  });
  return (
    <div className="grid text-sm grid-cols-4  gap-2 border-b-2 border-gray-400 text-gray-700 dark:text-gray-200 py-4">
      <h1 className="">{id}</h1>
      <h1 className="capitalize">{formattedDate}</h1>
      <h1 className="capitalize">{name}</h1>
      <h1 className="">{email}</h1>
    </div>
  );
}

export default StudentRow;
