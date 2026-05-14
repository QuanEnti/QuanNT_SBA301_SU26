import Carousel from 'react-bootstrap/Carousel'
import banner from '../data/banner'

function BannerCarousel() {
  return (
    <Carousel interval={3000} pause={false} ride="carousel">
      {banner.map((item) => (
        <Carousel.Item key={item.id}>
          <img
            className="d-block w-100 carousel-image"
            src={item.image}
            alt={item.title}
          />
          <Carousel.Caption>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default BannerCarousel
