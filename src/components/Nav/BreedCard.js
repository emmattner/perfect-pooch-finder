import React from 'react'

export default function BreedCard({
  breed, 
  group,
  foodLevel,
  image,
  temperament,

}) {
    return (
    <div class="container flex justify-center" className="card">
    <div class="max-w-sm py-32">
      <div class="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
        <img class="rounded-t-lg justify-center" src={image} alt={breed} loading="lazy" />
        <div class="py-6 px-8 rounded-lg bg-white">
          <h1 class="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">{breed}</h1>
          <p class="text-gray-700 tracking-wide">Breed Group: {group}</p>
          <p class="text-gray-700 tracking-wide">Temperament: {temperament}</p>
          <span class="text-gray-700 tracking-wide">Grams of Food Per Day: {foodLevel}g</span>
        </div>
        <br></br>
        <div>
        <button class="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300"><td onClick={() => window.open("https://dog.fandom.com/wiki/Dog_Wiki", "_blank")}>Learn More!</td></button>
        </div>
      </div>
    </div>
    <br></br>
    <br></br>
  </div>

  )

}