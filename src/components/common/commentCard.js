import React from 'react'
import './style.scss';

const CommentCard = (props) => {
    return (           
            <div className="cards">
                <p>{ props.data.comment }</p>
                { console.log(props.data)}
                <span className="commentAuthor"> ~ By { props.data.name } </span>
            </div> 
                  
    );
}

export default CommentCard