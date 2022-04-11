import React from 'react'

const Dropdowns = () => {
    return (
        <div className="btn-group">
            <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                Show All
            </button>
            <ul className="dropdown-menu dropdown-menu-lg-end">
                <li><button className="dropdown-item" type="button">Action</button></li>
                <li><button className="dropdown-item" type="button">Another action</button></li>
                <li><button className="dropdown-item" type="button">Something else here</button></li>
            </ul>
        </div>
    )
}

export default Dropdowns;