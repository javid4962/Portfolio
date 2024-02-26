
import '../index.css'

export default function Skills() {
  return (
    <>
      {/* <Header/> */}
      <div className="container m-auto my-5 h-100" id="skills">
        <div>
          <h3>#Skills</h3>
          <p className="text-secondary">My Technical Skills</p>
        </div>
       <div className="row row-cols-lg-4 d-flex justify-content-center">
        <div className="col-4 border m-1 rounded" style={{width:'10rem',height:'10rem',backgroundImage:'url(/logos/html.jpg)',backgroundPosition:'center',backgroundSize:'cover'}}>
          <input type="range" value={'50%'} className='d-block m-0 p-0'/>
        </div>
        <div className="col-4 border m-1 rounded" style={{width:'10rem',height:'10rem',backgroundImage:'url(/logos/css.jpg)',backgroundPosition:'center',backgroundSize:'cover'}}></div>
        <div className="col-4 border m-1 rounded" style={{width:'10rem',height:'10rem',backgroundImage:'url(/logos/js.jpg)',backgroundPosition:'center',backgroundSize:'cover'}}></div>
        <div className="col-4 border m-1 rounded" style={{width:'10rem',height:'10rem',backgroundImage:'url(/logos/bootstrap.jpg)',backgroundPosition:'center',backgroundSize:'cover'}}></div>
        <div className="col-4 border m-1 rounded" style={{width:'10rem',height:'10rem',backgroundImage:'url(/logos/wordpress.jpg)',backgroundPosition:'center',backgroundSize:'cover'}}></div>
        <div className="col-4 border m-1 rounded" style={{width:'10rem',height:'10rem',backgroundImage:'url(/logos/react.jpg)',backgroundPosition:'center',backgroundSize:'cover'}}></div>
        <div className="col-4 border m-1 rounded" style={{width:'10rem',height:'10rem',backgroundImage:'url(/logos/mongodb.jpg)',backgroundPosition:'center',backgroundSize:'cover'}}></div>
        <div className="col-4 border m-1 rounded" style={{width:'10rem',height:'10rem',backgroundImage:'url(/logos/mysql.jpg)',backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}></div>
        <div className="col-4 border m-1 rounded" style={{width:'10rem',height:'10rem',backgroundImage:'url(/logos/git.jpeg)',backgroundPosition:'center',backgroundSize:'cover'}}></div>
        <div className="col-4 border m-1 rounded" style={{width:'10rem',height:'10rem',backgroundImage:'url(/logos/c.jpg)',backgroundPosition:'center',backgroundSize:'cover'}}></div>
        <div className="col-4 border m-1 rounded" style={{width:'10rem',height:'10rem',backgroundImage:'url(/logos/java.jpg)',backgroundPosition:'center',backgroundSize:'cover'}}></div>
        <div className="col-4 border m-1 rounded" style={{width:'10rem',height:'10rem',backgroundImage:'url(/logos/azure.png)',backgroundPosition:'center',backgroundSize:'cover'}}></div>
       </div>


      </div>
    </>
  )
}
