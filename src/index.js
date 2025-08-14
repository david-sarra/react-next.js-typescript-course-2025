import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

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
// function Greeting() {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   )
// }

// const Person = () => <h2>john doe</h2>
// const Message = () => {
//   return <p>this is my message</p>
// }

// const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(<Greeting />)

// Booklist

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}
const author = 'Mel Robbins &amp; Sawyer Robbins'
const Book = () => {
  const title = 'The Let Them Theory'
  return (
    <artcicle className="book">
      <img src="./images/let_them_theory.jpg" alt="The Let Them Theory" />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </artcicle>
  )
}

// Factored elements outside objects (?)

// const Book = () => {
//   return (
//     <article className="book">
//       <Image />
//       <Title />
//       <Author />
//     </article>
//   )
// }

// const Image = () => (
//   <img src="./images/let_them_theory.jpg" alt="The Let Them Theory" />
// )
// const Title = () => <h2>The Let Them Theory</h2>
// const Author = () => {
//   const inlineHeadingStyles = {
//     color: '#617d98',
//     fontSize: '0.75rem',
//     marginTop: '0.5rem',
//   }
//   return <h4 style={inlineHeadingStyles}>Mel Robbins &amp; Sawyer Robbins</h4>
// }

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
