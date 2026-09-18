import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const campings = [
  {
    name: "Vilanova Park",
    location: "Vilanova i la Geltrú",
    img: "https://www.campingsdecatalunya.org/wp-content/uploads/vilanova-park-002-1-1024x517.jpg",
    id: 1,
  },

  {
    name: "Holacamp Sitges Relax",
    location: "Sitges",
    img: "https://www.campingsdecatalunya.org/wp-content/uploads/sitges-002-1-1024x651.jpg",
    id: 2,
  },
];

function CampingList() {
  return (
    <section className="campinglist">
      <EventExamples/>
      {campings.map((camping) => {
        
        return (
          <Camping {...camping} key={camping.id}/>
        );
      })}
    </section>);
}

const EventExamples = () => {
  return <section>
    <form>
      <h2>Typical Form</h2>>
        <input type="text" style={{ margin: '1rem 0' }} />
        </form>;
  </section>;
}

const Camping = (props) => {
  const { name, location, img } = props;
  console.log(props);
  return (
    <article className="camping">
      <img src={img} alts={name} />
      <h2>{name}</h2>
      <h4>{location}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<CampingList />);
