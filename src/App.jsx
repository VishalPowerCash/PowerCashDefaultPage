
import './App.css'
import './home.css';

function App() {

  return (
    <>
      <nav className="navbar" >
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="images/powercashlogo.jpg" alt="Bootstrap" width="110" height="50" />
          </a>
        </div>
      </nav>
      <div className='p-3'>

        <h5 className='mt-5 mb-3' style={{ color: "#adb5bd" }}>Powering growth for over <strong className='text-white'>200,000 businesses</strong> – from startups to enterprises.</h5>
        <h1 className='mb-5'>Effortless lending and partnerships <br /> management for every business</h1>

        <a className='text-white btn mb-4 rounded-3 ' style={{ backgroundColor: "#072ac8" }} href="https://docs.google.com/forms/d/e/1FAIpQLSdJK96stqrqucXD2wRWmQcvSIxm1s9HbCWODcLsbjsoxq8UgA/viewform?pli=1">Contact Sales


          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="bi bi-arrow-right"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </a>
        <h6 className=''>New experience coming soon!</h6>
      </div>
    </>
  )
}

export default App
