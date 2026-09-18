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
      <EventExamples />
      {campings.map((camping) => {
        return <Camping {...camping} key={camping.id} />;
      })}
    </section>
  );
}

const EventExamples = () => {
  const handleFormInput = (e) => {
    //console.log(e);
    console.log(e.target);
    console.log(e.target.value);
    console.log(e.target.name);
    console.log("Form input handled");
  };
  // const handleButtonClick = () => {
  //   alert("handle button click");
  // };
  // const handleFormSubmission = (e) => {
  //   e.preventDefault();
  //   console.log("Form submitted");
  // };
  return (
    <section>
      <form>
        <h2>Check availability</h2>
        <input
          type="text"
          name="example"
          onChange={(e) => console.log(e.target.value)}
          style={{ margin: "1rem 0" }}
        />
      </form>
      <button onClick={() => console.log("hello there")} type="button">
        Book now
      </button>
    </section>
  );
};

const Camping = (props) => {
  const { name, location, img } = props;
  const displayName = () => {
    console.log(name);
  };
  return (
    <article className="camping">
      <img src={img} alts={name} />
      <h2>{name}</h2>
      <button onClick={displayName}>display name</button>
      <h4>{location}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<CampingList />);
