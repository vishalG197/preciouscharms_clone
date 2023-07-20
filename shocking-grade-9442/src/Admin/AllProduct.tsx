// src/App.tsx

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../Redux/AdminReducer/action';


const App: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.data.data);
  const error = useSelector((state: any) => state.data.error);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {data.map((item: any) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};

export default App;
