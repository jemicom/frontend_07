import React , {useState } from 'react'
import './Pagination.css'
import { BsFillCaretLeftSquareFill , BsFillCaretRightSquareFill} from "react-icons/bs";

const Pagination = ({ 
    currentPage, setCurrentPage, postsPerPage, setPostPerPage,
    prevPageHandle, nextPageHandle
}) => {
    const [ pageAcitve, setPageActive] = useState(currentPage);

    const pageNumbers = [];
    for(let i=1; i<= Math.ceil(100/postsPerPage); i++){
        pageNumbers.push(i) 
    }
  return (
    <div className='pagination-container'> 
        <BsFillCaretLeftSquareFill onClick={prevPageHandle}
              style={{ display : currentPage === 1 ?  "none" : "block"}}
        />
        <ul className='pagination'
        >
        {
            pageNumbers.map((number, index)=>(
                <li onClick={ ()=>setCurrentPage(number)}
                     className={ number === currentPage ? "active" : "" }
                >{number}</li>
            ))
        }
        </ul>
        <BsFillCaretRightSquareFill onClick={nextPageHandle}
                style={{ display : currentPage === pageNumbers.length ?  "none" : "block"}}
        />
    </div>
  )
}

export default Pagination