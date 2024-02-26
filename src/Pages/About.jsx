// import Header from "./Header";

export default function About() {
    const style={
        minHeight:'30em'
      };
    return (
        <>
            {/* <Header /> */}
            <div className="container m-auto my-5 h-100" style={style} id="about">
                <div className="">
                    <h3> #About me</h3>
                    <p className="text-secondary">My Introduction</p>
                </div>

                <div className="d-flex flex-column flex-md-column flex-lg-row align-items- justify-content-center">
                    <div className="col  m-auto">
                        <img src="/about_bg.jpg" alt="" className="card img-fluid" style={{maxWidth:'15rem'}}/>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center fs-5">
                        <div className="p-3">Motivate graduate looking for entry level position in an organization where I can use my intern experience, technical skills, and abilities to help me grow professionally, work for the growth of the organization as well.</div>
                        <a href="https://profile.indeed.com/p/shaikm-14lzc2j" target="blank" className="btn btn-primary m-auto fs-6 p-1m-0">Resume <i className="bi bi-arrow-down-circle-fill btn p-0 text-white m-0"></i></a> {/* have to add resume link here */}
                    </div>
                </div>

            </div>
        </>
    );
}