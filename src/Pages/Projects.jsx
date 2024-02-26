import Carousel from 'react-bootstrap/Carousel';


export default function Projects() {
  return (
    <>
    {/* <Header/> */}
    <div className="container my-4 h-100">
      <h3>#Projects</h3>
    </div>
    <Carousel className=" m-4" id="projects">
      <Carousel.Item>
          <div className="d-flex justify-content-center align-items-center">
            <img
              className="d-block img-fluid"
              src="/pro_thumbnail2.jpg"
              width={'700rem'}
              alt="First slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center align-items-center">
            <img
              className="d-block img-fluid"
              src="/pro_thumbnail3.jpg"
              width={'700rem'}
              alt="Second slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center align-items-center">
            <img
              className="d-block img-fluid"
              src="/pro_thumbnail1.jpg"
              width={'700rem'}
              alt="Third slide"
            />
          </div>
        </Carousel.Item>
        
      </Carousel>

    </>
  )
}
