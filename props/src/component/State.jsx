// import React, { useState } from 'react'

// const State = () => {
//   const [count , setcount] = useState(0)
//   return (
//     <div>

//       <h1>{count }</h1>
//     <button onClick={()=> setcount(count + 1)}  >Count + </button>
//     <button onClick={()=> setcount(count - 1)}  >  Count - </button>
      
//     </div>
//   )
// }

// export default State



// conditional rerendering

import React, { useState } from 'react'

const State = () => {
  const[isLoggedIn , setIsLoggedIn] = useState(true)
  return (
    <div>

      {
        isLoggedIn ? <p>
          hello you are logged in 
        </p> : <h1>
            not logged in 
        </h1>
      }

      
    </div>
  )
}

export default State
