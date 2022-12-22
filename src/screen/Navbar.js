import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = ({ children }) => {
    const navigate=useNavigate()
    let token =''
    useEffect(() => {
        token = localStorage.getItem('authtoken');
      },[])
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="/product">Product</a>
                       { token ?
                       <>
                        <a className="nav-item nav-link" ><button className='border border-1' onClick={()=>{
                            localStorage.removeItem('authToken');
                            navigate('/')
                        }}>logout </button></a>
                        </>:<>
                        <a className="nav-item nav-link" href="/">login</a>
                        <a className="nav-item nav-link" href="/register">register</a>
                       
                        </>
                        }

                    </div>
                </div>
            </nav>
            <div>
                {children}
            </div>
        </>
    )
}

export default Navbar