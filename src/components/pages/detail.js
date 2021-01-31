import React, {useState, useEffect } from 'react'
import CommentComp from '../common/commentComp';
import './detail.scss' 
import axios from 'axios'
import { BLOG_URL } from '../utils/url'
import Comments from  '../common/comments'
import TopBlogs from '../common/topBlogs';
import moment from 'moment'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock } from '@fortawesome/free-solid-svg-icons'



const removeTag = (content) => {
    const regex = /(<([^>]+)>)/ig
    return content.replace(regex, '')
}


const Detail = (props) => {
    const [fetching, setFetching] = useState(true)
    const [detail, setDetail] = useState([])

    useEffect(() => {
        axios.get(BLOG_URL + props.match.params.slug)
        .then(res => {
            setDetail(res.data)
            console.log(res.data);
            setFetching(false)
        })
        .catch(err => console.log(err))
    }, [props.id]);

    return (
        <div className="detail-container">
            <div className="main-cover">
                <div className="image">
                    <img src={detail.cover}/>
                </div>
                <br/>
                <div className="blogDetailContainer">

                    <div className="detail">
                        <h3>{ detail.title }</h3>
                        <div className="author">
                        <FontAwesomeIcon icon={faClock} />&nbsp;&nbsp;
                            {moment(new Date(detail.created_at)).format("DD-MMM-YYYY")}</div>

                      <div className="content">
                        <span dangerouslySetInnerHTML={{ __html: detail.content  }}>{}</span>  
                        {/* {  removeTag(detail.content).toString().substring(0,100)  } */}
                      </div>
                        <br/>
                        <div className="last-part">
                            {/* <img src={detail.cover} /> */}
                            <a href={detail.btn_link} target="_blank">{detail.title}</a>
                        </div>

                       
                         <CommentComp  id={ detail.id }/>
                         <Comments id={detail.id}/>
                    </div>


                    <div className="card">

<div className="blogExtras">
<p className="related_blogs">Related Blogs</p>
<TopBlogs similar ={ detail.id }/>
</div>
</div>
                   





{/*                 
        <div className="card">

          <div className="blogExtras">  
             <p className="related_blogs">Related Blogs</p>
            <div className="blogCardExtra"  >
                <div className="blogImage">
                    <img src="./1.png" />
                    <div className="blogContent">
                        <div className="blogTitle">
                        Title  
                        </div>
                        <button>Read Blog</button>
                        <div className="blogFooter">
                            By dreamer , on 1990/82/2
                        </div>
                    </div>
                </div>
            </div>
              </div> 
                </div>
               
                */}
               
               
                </div>
            </div>            
        </div>
    )
}

export default Detail