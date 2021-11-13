import GameItem from '../../molecules/game-item'

const games = [
  {
    title     : 'Super Mecha',
    category  : 'mobile',
    thumbnail : '/img/Thumbnail-1.png'
  },
  {
    title     : 'Call of Duty: Modern',
    category  : 'mobile',
    thumbnail : '/img/Thumbnail-2.png'
  },
  {
    title     : 'Mobile Legends',
    category  : 'mobile',
    thumbnail : '/img/Thumbnail-3.png'
  },
  {
    title     : 'Clash of Clans',
    category  : 'mobile',
    thumbnail : '/img/Thumbnail-4.png'
  },
  {
    title     : 'Valorant',
    category  : 'mobile',
    thumbnail : '/img/Thumbnail-5.png'
  }
]

export default function FeaturedGames() {
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Our Featured<br /> Games This Year
        </h2>
        <div className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          { games.map((game) => <GameItem key='title' { ...game } /> ) }
        </div>
      </div>
    </section>
  )
}
