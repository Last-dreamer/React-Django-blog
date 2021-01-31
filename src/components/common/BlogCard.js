import react from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';


const removeTag = (content) => {
    const regex = /(<([^>]+)>)/ig
    return content.replace(regex, '')
}



const BlogCard = (props) => {

    return <div className="blogCard"  key={ props.data.id }>

    <div className="blogImage">
        <img src={ props.data.cover } alt="Not Availible..!" />
        <div className="blogContent">
            <div className="blogTitle">
              {  props.data.title }
            </div>
                <p>{ removeTag(props.data.content).toString().substring(0, 50)}
                   { removeTag(props.data.content).toString().length > 50 && "....." }
                </p>
                <Link to={ props.data.slug }>           
                   <button>Read More</button>
                </Link>
            <div className="blogFooter">
                Created by:  { props.data.author.username } , on { moment(new Date(props.data.created_at)).format('DD-MM-YYYY') }
            </div>
        </div>
    </div>
  </div>
}

export default BlogCard