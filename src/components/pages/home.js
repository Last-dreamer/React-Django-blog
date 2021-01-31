import React, { useState, useEffect } from 'react';
import "./home.scss";
import axios from 'axios';
import {BLOG_URL} from '../utils/url';
import BlogCard from "../common/BlogCard"
import TopBlogs from '../common/topBlogs';
import ReactPaginate from 'react-paginate';


const Home = (props) => {

    const [fetching, setFetching] = useState(true)
    const [blogList, setBlogList] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [search, setSearch] = useState("")

    let debouncer;

    useEffect(() => {
         clearTimeout(debouncer);
            debouncer = setTimeout(() =>{
                let extra = `?keyword=${search}&page=${currentPage}`;
                getBlogContent(extra);
            }, 500);   
    }, [search, currentPage]);
    



    const getBlogContent = (extra = "") => {
        setFetching(true)
        axios.get(BLOG_URL + extra)
        .then(res => {
            setBlogList(res.data)
            setFetching(false)
            console.log(currentPage)
        })
        .catch(err => console.log(err))
    }

    return (

        <div >
          <div className="banner">
              <h3>Welcome to the DreamerBlog!</h3>
              <p>Here, you will find the latest news about Technologies..</p>
              <div className="searchBlog">
                  <input  placeholder="search blog content" value={search} onChange={(e) => setSearch(e.target.value)}/>
              </div>
          </div>


          <div className="blogListContainer">
              <div className="blogList">
                  
                 {  !fetching && blogList.results.map((item, id) => {
                         return (
                             <BlogCard key={id} data={item} />
                         )
                     })
                 }



          {
              !fetching && (
                  <div >
                      <ReactPaginate 
                        pageCount={Math.ceil(blogList.count / 5)}
                        pageRangeDisplayed={5}
                        marginPagesDisplayed={1}
                        currentPage={currentPage}
                        onPageChange={e => setCurrentPage(e.selected +1)}
                        containerClassName={"pagination"}
                        previousLinkClassName={"pagination__link"}
                        nextLinkClassName={"pagination__link"}
                        disabledClassName={"pagination__link--disabled"}
                        activeClassName={"pagination__link--active"}
                        activeLinkClassName={"pagination__link--active"}
                      />
                 </div>
              )
          }
              </div>


              <div className="blogExtras">
                  <h4>Top Blogs</h4>
                  <TopBlogs />
              </div>
            </div>
          

          </div>
    )
}

 
export default Home