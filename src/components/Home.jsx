import { Products } from "./Products"
export const Home = () => {
  return (
    <div>
            <div className="card text-white boder-0 mb-3">
                <img src="/assents/bg.webp" className="card-img" alt="..." />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                    <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                    <p className="card-text lead fs-2">CKECK OUT ALL THE TRENDS</p>
                    
                    </div>
                    
                </div>
            </div>
            <Products />
            </div>
  )
}
