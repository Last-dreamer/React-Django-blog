import React, { useState, useEffect } from 'react'
import  BlogCardExtra  from '../common/BlogCardExtras';
import { TOP_BLOGS,  SIMILAR_BLOGS } from '../utils/url';
import axios from 'axios'


const TopBlogs = (props) => {

    const [fetching, setFetching] = useState(true)
    const [blogList, setBlogList] = useState([])

    useEffect(() => {
        getTopBlog();

    }, [props.similar]);
     

    const getTopBlog = () => {
        axios.get( props.similar ? SIMILAR_BLOGS + props.similar : TOP_BLOGS )
        .then(res => {
            setBlogList(res.data.results)
            setFetching(false) 
        })
        .catch(err => console.log(err))
    }


    return (
        <>
            {  
             blogList.length < 1 ? 
              <h4> No { props.similar ? "Similar" : "Top"} blog found here...</h4>  :
              
              blogList.map((item, id) => {
                return <BlogCardExtra key={id} data={item} />
            }) 

            }
        </>
    )
}

export default TopBlogs