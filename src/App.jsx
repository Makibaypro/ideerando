// import { useState } from 'react'
import randonnees from "./../data/randonnees.json";
import './App.css';
import { Card } from './Card.jsx';
import { Picture } from './Picture.jsx';
import { Entete } from './Entete.jsx';
import { Footer } from './Footer.jsx';
import { useState } from "react";

const App = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const data = randonnees;


  const cardSelected = (data) => {
    setSelectedCard(data.id);
  };

  const dataCardSelected = data.find((rando) => rando.id === selectedCard);
console.log(selectedCard);


  return (
    <>
      <Entete className='entete' />
      <section className='hero'>
        <div className='cardGRP'>
        {data.map((element) => {
          return <Card data={element} key={element.id} cardData={cardSelected} active={selectedCard} />;
          })}
        </div> 
        <Picture cardData={dataCardSelected}/>
      </section>
      <Footer />
    </>
  )
}

export default App
