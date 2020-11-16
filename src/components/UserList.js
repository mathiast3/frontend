import React, { useState, useEffect } from 'react';

function UserList() {
  // set the states
  const [hasError, setErrors] = useState(false);
  const [users, setUsers] = useState({});
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/users");
      res
        .json()
        .then(res => setUsers(res))
        .catch(err => setErrors(err));
    }

    fetchData();
  });
  return (
    <div>
       <h1>Users</h1>
        <div>
          <p>{JSON.stringify(users)}</p>
        </div>
    </div>
  );
}


export default UserList;