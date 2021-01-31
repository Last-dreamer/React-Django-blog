import React, { useEffect } from 'react'
import moment from 'moment';
import { Link } from 'react-router-dom';


const BlogCardExtra = (props) => {

    
    return  <div className="blogCardExtra" key={ props.data.id } >
        <div className="blogImage">
            <img src={ props.data.cover } />
            <div className="blogContent">
                <div className="blogTitle">
                  { props.data.title.toString().substring(0, 25)}
                  { props.data.title.length > 25 &&  "...." }

                </div>
                <Link to={ props.data.slug } >
                  
                  <button onClick={() =>   window.location.reload(false)}> Read Blog</button>
                  {/* <button> Read Blog</button> */}
                  
                </Link>
                <div className="blogFooter">
                    By { props.data.author.username }, on { moment(new Date(props.data.created_at)).format("YYYY/MM/DD")}
                </div>
            </div>
        </div>
    </div>
}

export default BlogCardExtra