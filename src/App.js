import React from 'react';
import Navbar from './components/navbar';
import { Auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth'

function App() {
  const [user] = useAuthState(Auth)
  // console.log(user);
  return (
    <div className='max-w-[728px] mx-auto text-center'>
      <section className='flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative'>
        <Navbar />

      </section>
    </div>
  );
}

export default App;
