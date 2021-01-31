import React, { useEffect, useState, useContext, state } from 'react'
import './style.scss';
import axios from 'axios'
import { BLOG_COMMENT_URL } from '../utils/url'
import CommentCard from './commentCard';
import { store } from '../stateManagement/store';
import { commentTriggerState } from '../stateManagement/genericReducer'


const Comments = (props) => {

 const [fetching, setFetching] = useState(true)
 const [commentList, setCommentList] = useState([]);

 
 const {dispatch} = useContext(store);


useEffect(() => {
          
        axios.get(BLOG_COMMENT_URL + `?blog_id=${props.id}`).then(
            (res) => { 
                setCommentList(res.data)
                setFetching(false)
                console.log(res.data)
           },
           (err) => { console.log(err.response.data)}
       );
       
       dispatch({type: "commentTriggerAction", payload: false})

    
    
 }, [props.id])


    return (
        <div className="container">
            <div className="commentList">
                <h3>Comments</h3>
                {
                    !fetching && commentList.results.length < 1  &&
                    <h4>No comments!.. Be the first one to comments on this blog.</h4>
                }  
                     {
                            !fetching && commentList.results.length === 5 && commentList.results.map((item,key)=>{
                                return <CommentCard key={key} data={item}/> 
                            })
                     }
                     
                     {
                        !fetching && commentList.results.length <5 && commentList.results.map((item,key)=>{
                            return <CommentCard key={key} data={item}/> 
                        }) 
                     }
                
                
            </div>
        </div>
    );
}

export default Comments