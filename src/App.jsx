/* eslint-disable react/prop-types */
import React, { useState } from 'react'

const App = () => {
  const [isClose, setClose] = useState(false)
  return (
    <>
     <div className="h-dvh flex justify-center items-center flex-col">
      <div className='w-40 *:p-3 relative' >

        <header onClick={() => setClose(!isClose)} className="bg-zinc-700">
          Hello
        </header>
        <div className={`${isClose ? '  -translate-y-full h-0' : ''}  w-full overflow-hidden transition-all bg-red-500 `}>
          <main className=''>Main</main>
        </div>
        <footer className="bg-zinc-700">bye bye</footer>
      </div>
      </div>
    </>
  )
}

export default App
