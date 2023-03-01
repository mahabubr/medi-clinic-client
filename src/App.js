import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import MainLoader from './Components/MainLoader/MainLoader';
import auth from './Firebase/firebase.config';
import { setUser } from './Redux/features/auth/authSlice';
import router from './Routes/route';

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        dispatch(setUser(user.email))
      }
    })
  }, [dispatch])

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      {
        loading
          ?
          <MainLoader />
          :
          <RouterProvider router={router} />
      }
    </>
  );
}

export default App;
