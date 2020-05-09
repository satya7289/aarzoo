import React from 'react';
import { render } from 'react-dom';

class Pagination extends React.Component{


  render() 
    {
      const { postsPerPage, totalPosts, search, paginate } = this.props
      const pageNumbers = [];
      const offset = 0;

      for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
        if(i==10){
          break
        }
      }

      const next = () =>{
        console.log("clicked");
      }

      console.log(totalPosts,"totalpost");
      return (
        <div className="float-right">
          <nav>
            <ul className='pagination'>
              {pageNumbers.map(number => (
                <li key={number} className='page-item'>
                  <a onClick={() => paginate(number)} className='page-link text-primary'>
                    {number}
                  </a>
                </li>
              ))}
              <li>
                  <a onClick={next} className='page-link text-primary'>
                    >>
                  </a>
              </li>
            </ul>
          </nav>
        </div>
      );
    };
}

export default Pagination;