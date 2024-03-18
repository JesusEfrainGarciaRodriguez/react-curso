import { getHeroesByPublisher } from "../helpers";
import { Hero } from "./Hero";

export const HeroList = ({ publisher }) => {

  const heroes = getHeroesByPublisher(publisher)

  return (
    <ul>
      {heroes.map((hero) => (
        <li key={hero.id}>
          <Hero hero={hero}/>
        </li>
      ))}
    </ul>
  )
}
