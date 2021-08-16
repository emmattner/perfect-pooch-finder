import React from 'react'



export default function BreedCard({
  breed, 
  group,
  foodLevel,
  image,
  temperament,

}) {
    return (
    <div className="card">
    <div>
      <div>
        <img  src={image} alt={breed} loading="lazy" />
        <div>
          <h1>{breed}</h1>
          <p>Breed Group: {group}</p>
          <p>Temperament: {temperament}</p>
          <span>Grams of Food Per Day: {foodLevel}g</span>
        </div>
        <br></br>
        <div>
        <button><td onClick={() => window.open("https://dog.fandom.com/wiki/Dog_Wiki", "_blank")}>Learn More!</td></button>
        </div>
      </div>
    </div>
    <br></br>
    <br></br>
  </div>

  )

}

document.querySelector('.demo-carousel')