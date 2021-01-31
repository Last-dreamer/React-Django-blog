import React, {useState, useEffect, useContext} from 'react'; 
import axios from 'axios'
import {BLOG_COMMENT_URL} from '../utils/url'
import {store} from '../stateManagement/store'


const CommentComp = (props) => {

const [commentData, setCommentData]  = useState({ blog_id : props.id })
const [loading, setLoading] = useState(false)
const { dispatch } = useContext(store)



 useEffect(() => {
     setCommentData({ blog_id : props.id })
  }, [props.id])


const onChange = (e) => {
   setCommentData({
    ...commentData,
    [e.target.name]: e.target.value,
   });
}


const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.post(BLOG_COMMENT_URL, commentData).then(res => {
        console.log(res.data)
        alert("comment submitted successfully");
        setCommentData({ blog_id: props.id });
        setLoading(false);
        dispatch({type: "commentTriggerAction", type: true})
    })
    .catch(err => {
        console.log(err.response.data)
        setLoading(false)
    });
    
}

    return (
        <div className="comment-comp">
            <h3>write a comment</h3>
            <form onSubmit={onSubmit}>
                <input placeholder="Enter Your Name" name="name" value={commentData.name || ""} onChange={onChange}/>
                <br/>
                <textarea  placeholder="Enter Your Comment" rows={5} name="comment" value={commentData.comment || ""} onChange={onChange} required/>
                <br/>
                <button type="submit" disabled={loading}>{ loading ? "submitting...." : "submit"}</button>
            </form>
        </div>
    )
}


export default CommentComp