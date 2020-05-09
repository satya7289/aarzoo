import React from 'react';


class Search extends React.Component{
  state = {
    page :0,
    search:'',
  }

  onChangeHandle = (e) =>{
    this.setState({
      page:0,
      search:e.target.value
    });
  }

  onSubmitHandle = (e) => {
    e.preventDefault();
    this.props.AddSearch(this.state);
  }


  render(){
    return (
      <nav>
        <form className="form-inline my-2 my-lg-0" onSubmit={this.onSubmitHandle}>
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.onChangeHandle}/>
        <button className="btn btn-outline-success my-2 my-sm-0">Search</button>
        </form>       
      </nav>
      
    )
  }
};

export default Search;


// class App extends React.Component {
//   constructor() {
//     super();
//     this.ref = React.createRef();
//     this.state = {
//       search:'',
//       page:0,
//       isLoading:false,
//       result:[],
//       totalPosts:0,
//     };
//   }

//   searchAPI = async (q,page) => {
//     const API_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
//     const PUBLIC_KEY = 'xrp7NPZMKRQ3U8nmHM5UMXu2XwBKYXei';
//     const query = API_URL + '?q=' + q + '&page=' + page +'&api-key=' + PUBLIC_KEY;
//     const result = await fetch(query);
//     const return_json = await result.json();
//     console.log(query);
//     return return_json;
//   }

//   onSubmit = (e) => {
//     e.preventDefault();

//     this.state.search = this.ref.current.value;
//     this.state.page = 0;

//     this.state.result = this.searchAPI(this.state.search,this.state.page);

//     this.ref.current.value = '';
//     console.log(this.state,this.state.result);
//   }

  
//   paginate = (number,query) => { 
//     this.state.search=query;
//     this.state.page = number;
//     this.state.result = this.searchAPI(this.state.search,this.state.page);
//     console.log(number,query,this.state);
//   }


//   render(){
//     return (
//       <div className="wrapper">
//         <Sidebar/>
//         <div className="content">
//           <section>
//             <form className="form-inline my-2 my-lg-0" onSubmit={this.onSubmit}>
//             <input className="form-control mr-sm-2" type="search" ref={this.ref} placeholder="Search" aria-label="Search"/>
//             <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//             </form>
//           </section>


//           <Result/>
//             <Pagination postsPerPage={10} totalPosts={100} query={this.state.search} paginate={this.paginate}/>
//         </div>
            
//       </div>
//     );
//   }
// };


/*
  searchAPI = async (q,page) => {
    // const API_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
    // const PUBLIC_KEY = 'xrp7NPZMKRQ3U8nmHM5UMXu2XwBKYXei';
    // const query = API_URL + '?q=' + q + '&page=' + page +'&api-key=' + PUBLIC_KEY;
    // const result = await fetch(query);
    // const return_json = await result.json();
    // console.log(query);
    return 'return_json';
  }

  onSubmit = (e) => {
    e.preventDefault();

    this.state.search = this.ref.current.value;
    this.state.page = 0;

    this.state.result = this.searchAPI(this.state.search,this.state.page);

    this.ref.current.value = '';
    
    console.log(this.resultRef.current.html);
    console.log(this.state,this.state.result);
  }

  
  paginate = (number,query) => { 
    this.state.search=query;
    this.state.page = number;
    // this.state.result = this.searchAPI(this.state.search,this.state.page);
    console.log(number,query,this.state);
  }

*/