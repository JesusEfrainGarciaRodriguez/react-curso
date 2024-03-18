export const Hero = ({hero}) => {
  return (
    <div>
        <h1>{hero.superhero}</h1>
        <p>publisher: {hero.publisher}</p>
    </div>
  )
}
