import React from 'react'
import ReactDOM from 'react-dom/client'

//Section 3: React Fundamentals

// JSX Rules
// function Greeting() {
//   return (
//     <React.Fragment>
//       <div className="someValue">
//         <h3>hello people</h3>
//         <ul>
//           <li>
//             <a href="#link">hello world</a>
//           </li>
//         </ul>
//       </div>
//       <h2>hello world</h2>
//       <input type="text" name="" id="" />
//     </React.Fragment>
//   )
// }

//  Nest Components
function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  )
}

const Person = () => <h2>john doe</h2>
const Message = () => {
  return <p>this is my message</p>
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greeting />)
