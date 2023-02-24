import { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import MainLoader from './Components/MainLoader/MainLoader';
import router from './Routes/route';

function App() {

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <div>
      {
        loading
          ?
          <MainLoader />
          :
          <RouterProvider router={router} />
      }
    </div>
  );
}

export default App;
