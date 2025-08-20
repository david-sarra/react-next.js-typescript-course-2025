import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

//Section 3: React Fundamentals

//////////
// JSX Rules
//////////

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

//////////
//  Nest Components
//////////

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

// const author = 'Mel Robbins &amp; Sawyer Robbins'
// const Book = () => {
//   const title = 'The Let Them Theory'
//   return (
//     <article className="book">
//       <img src="./images/let_them_theory.jpg" alt="The Let Them Theory" />
//       <h2>{title}</h2>
//       <h4>{author.toUpperCase()}</h4>
//     </article>
//   )
// }

//////////
//Factored elements outside objects
//////////

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

//////////
// Props
//////////

// const firstBook = {
//   author: 'Mel Robbins &amp; Sawyer Robbins',
//   title: 'The Let Them Theory',
//   img: './images/let_them_theory.jpg',
// }

// const secondBook = {
//   author: 'Joël Dicker',
//   title: 'La muy catastrófica visita al zoo',
//   img: 'https://m.media-amazon.com/images/I/614Wp+ltIjL._SY342_.jpg',
// }

// const BookList = () => {
//   return (
//     <section className="booklist">
//       <Book
//         author={firstBook.author}
//         title={firstBook.title}
//         img={firstBook.img}
//       >
//         <p>
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque odit,
//           aut alias maiores voluptate deserunt non totam nulla fugiat eaque,
//           soluta cum cupiditate impedit optio aliquam nostrum ex repudiandae
//           nisi?
//         </p>
//         <button>click me</button>
//       </Book>
//       <Book
//         author={secondBook.author}
//         title={secondBook.title}
//         img={secondBook.img}
//       />
//     </section>
//   )
// }

// const Book = (props) => {
//   const { img, title, author, children } = props
//   console.log(props)
//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author}</h4>
//       {children}
//     </article>
//   )
// }

//////
// Simple List
/////

const books = [
  {
    author: 'Mel Robbins &amp; Sawyer Robbins',
    title: 'The Let Them Theory',
    img: './images/let_them_theory.jpg',
    id: 1,
  },
  {
    author: 'Joël Dicker',
    title: 'La muy catastrófica visita al zoo',
    img: 'https://m.media-amazon.com/images/I/614Wp+ltIjL._SY342_.jpg',
    id: 2,
  },
]

// Basic Events

const EventExamples = () => {
  // EVENT REFERENCES
  //   const handleFormInput = (e) => {
  //     console.log(e.target)
  //     console.log(e.target.name)
  //     console.log(e.target.value)
  //   }
  //   const handleButtonClick = () => {
  //     alert('handle button click')
  //   }
  //   const handleFormSubmission = (e) => {
  //     e.preventDefault()
  //     console.log('form submitted')
  //   }
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="product"
          onChange={(e) => console.log(e.target.value)}
          style={{ margin: '1rem 0' }}
        />
        <button type="submit">Submit</button>
        <div>
          <button onClick={() => console.log('click me')} type="button">
            click me
          </button>
        </div>
      </form>
    </section>
  )
}

const BookList = () => {
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book) => {
        return <Book {...book} key={book.id} />
      })}
    </section>
  )
}

const Book = (props) => {
  const { img, title, author } = props
  const displayTitle = () => {
    console.log(title)
  }
  //console.log(props)
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={displayTitle}>display title</button>
      <h4>{author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
