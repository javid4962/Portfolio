import Carousel from 'react-bootstrap/Carousel';


export default function Projects() {
  return (
    <>
    {/* <Header/> */}
    <div className="container my-4 h-100" id='projects'>
      <h3>#Projects</h3>
    </div>
    {/* <Carousel className=" m-4" id="projects">
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
        
      </Carousel> */}

<div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-1">
        <div className="col">
          <div className="card shadow-sm">
          <img src="/about_bg.jpg" alt="" className="img-fluid" />
            {/* <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
            <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
          <img src="/about_bg.jpg" alt="" className="img-fluid" />
            <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
          <img src="/about_bg.jpg" alt="" className="img-fluid" />
            <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
          <img src="/about_bg.jpg" alt="" className="img-fluid" />
            <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}
