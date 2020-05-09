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
        facets:{},
        page_no:0
    }

    componentDidUpdate(){
        const {search} = this.props;
        
        const API_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
        const PUBLIC_KEY = 'xrp7NPZMKRQ3U8nmHM5UMXu2XwBKYXei';
 
        if(!this.state.loading){
            
            axios.get(API_URL,{params:{
                    'q':search,
                    'sort':'newest',
                    'facet_fields':'pub_year',
                    'begin_date':'20110101',
                    'end_date':'20201212',
                    'facet_filter':true,
                    'facet':true,
                    'page':this.state.page_no,
                    'api-key':PUBLIC_KEY,
                }
            })
            .then(res=>{
                console.log(res);
              this.setState({
                data:res.data.response.docs,
                meta:res.data.response.meta,
                facets:res.data.response.facets.pub_year.terms,
                loading:true
              })
            })
            .catch(function(error){
                console.log(error);
            })
        }
    };

    paginate =(n) =>{
        console.log(n);
        this.setState({
            loading:false,
            page_no:n
        });
    }


    render(){
        const { search, page } = this.props;
        const { data, loading, meta} = this.state;
        
        if(search==''){
            return null
        }
        else if(loading){
            return(
                <div className="fluid-container">
                    Here are your search results for "{search}" 
                    <ShowResult data={this.state.data}/> 
                    <Pagination postsPerPage={10} totalPosts={this.state.meta.hits} search={search} paginate={this.paginate}/>
                    <Chart search={search} factes={this.state.facets}/>

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