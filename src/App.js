import React from 'react';
import './App.css';


// import Search from './components/Search';
import Sidebar from './components/Sidebar';
import Result from './components/Result';
import Search from './components/Search';
import Pagination from './components/Pagination';
import Chart from './components/Chart'

class App extends React.Component {
  
  state = {
    search: '',
    page:0,
    meta: {
      hits: 265387,
      offset: 0,
      time: 149
    },
  }  

  AddSearch =(s)=>{
    this.setState({
      search:s.search,
      page:s.page
    })
  }


  render(){
    console.log(this.state.search);
    const { search, page }=this.state;
    const paginate = (number) =>{
      console.log(number);
    }

    return (
      <div className="wrapper">
        <Sidebar/>
        <div className="content">
          <Search AddSearch={this.AddSearch}/>
          <Result search={this.state.search} page={this.state.page}/>
         
        </div>
      </div>
    );
  }
};

export default App;
