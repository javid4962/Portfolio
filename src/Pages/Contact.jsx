import Header from "./Header"

export default function Contact() {
  return (
    <>
      {/* <Header/> */}
      <div className="container my-4 h-100" id="contact">
        <h3>#Contact Section</h3>
        <div className="container row row-cols-1  h-100 p-3 rounded border border-1">
          <div className="col row row-cols-2 m-2 p-2">
            <div className="col w-25">
              <div className="icon d-inline p-3"><i className="bi bi-postcard"></i></div>
              Address</div>
            <div className="col w-75 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate minima, iusto facere placeat nisi error non reiciendis earum? Soluta quia in labore voluptate incidunt sunt nemo iste culpa quis libero!</div>
          </div>

          <div className="col row row-cols-2 m-2 p-2">
            <div className="col w-25">
              <div className="icon d-inline p-3"><i className="bi bi-phone"></i></div>
              Mobile</div>
            <div className="col w-75 ">+91 99XXXXXXXX</div>
          </div>

          <div className="col row row-cols-2  m-2 p-2">
            <div className="col w-25">
              <div className="icon d-inline p-3"><i className="bi bi-phone"></i></div>
              Email</div>
            <div className="col w-75 ">sample_email@gmail.com</div>
          </div>

          <div className="col-12 d-flex flex-row  justify-content-center m-2 p-2 bg-info rounded">
            
            <a href='https://github.com/javid4962' target='blank' className="text-black text-decoration-none bg-info">Github: <i className="bi bi-github fs-5 mx-0 me-3 bg-info text-black"></i></a> 
            
            <a href='https://www.linkedin.com/in/masthan-javid-vali-shaik-3a15ba248/' target='blank' className="text-black text-decoration-none bg-info">LinkedIn: <i className="bi bi-linkedin fs-5 mx-0 me-3 bg-info text-black"></i></a> 
            
            <a href='https://leetcode.com/javid4962' target='blank' className="text-black text-decoration-none bg-info">Leetcode: <i className="bi bi-code-square fs-5 mx-0 me-3 bg-info text-black"></i></a> 
            
            <a href='https://www.hackerrank.com/profile/javid_4962' target='blank' className="text-black text-decoration-none bg-info">HackerRank: <i className="bi bi-code-slash fs-5 mx-0 me-3 bg-info text-black"></i></a>
            
            <a href='https://instagram.com/_javid_4962' target='blank' className="text-black text-decoration-none bg-info">Instagram: <i className="bi bi-instagram fs-5 mx-0 me-3 bg-info text-black"></i></a>
          </div>







        </div>
      </div>

    </>
  )
}
