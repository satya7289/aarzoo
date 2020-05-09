import React from 'react';
import axios from 'axios';
import ShowResult from './ShowResult';
import Pagination from './Pagination';
import Chart from './Chart'

class Result extends React.Component {
    state = {
        data:[],
        loading:false,
        meta: {},
        facets:{}
    }

    componentDidUpdate(){
        const {search, page} = this.props;
        const API_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
        const PUBLIC_KEY = 'xrp7NPZMKRQ3U8nmHM5UMXu2XwBKYXei';
        const query = API_URL + '?q=' + search + '&page=' + page +'&api-key=' + PUBLIC_KEY;
        if(!this.state.loading){
            
            axios.get(API_URL,{params:{
                    'q':search,
                    'sort':'newest',
                    'facet_fields':'pub_year',
                    'begin_date':'20110101',
                    'end_date':'20201212',
                    'facet_filter':true,
                    'facet':true,
                    'page':page,
                    'api-key':PUBLIC_KEY,
                }
            })
            .then(res=>{
                console.log(res);
              this.setState({
                data:res.data.response.docs,
                meta:res.data.response.meta,
                facets:res.data.response.facets,
                loading:true
              })
            })
            .catch(function(error){
                console.log(error);
            })
        }
    };

    render(){
        const { search, page } = this.props;
        const { data, loading, meta} = this.state;
        const paginate = (number) =>{
            console.log(number);
        }
        if(search==''){
            return null
        }
        else if(loading){
            return(
                <div className="fluid-container">
                    Here are your search results for "{search}" 
                    <ShowResult data={this.state.data}/> 

                    <Pagination postsPerPage={10} totalPosts={this.state.meta.hits} search={search} paginate={paginate}/>

                    <Chart search={search} facets={this.state.facets.pub_year}/>
                </div>
            )
        }
        else{
            return (
                <div>loading...</div>
            )
        }
       
    }
       
  
    

};

export default Result;