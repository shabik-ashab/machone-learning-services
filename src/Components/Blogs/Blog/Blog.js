import React from 'react';
import './Blog.css';

const Blog = (props) => {
    const {tags,title,img,author,publish,authorImg}= props.course;
    return (
        <div>
            <div className="col g-4">
        <div class="blog-card">
   <img src={img} class="blog-img p-3" alt="..."/>
   <div className="card-body">
       <div>
           <p className="blog-tag w-25 p-1 px-2 rounded-pill text-center">{tags}</p>
           <h4>
               {title}
           </h4>
       </div>
       <div className="d-flex align-items-center">
           <div>
               By:{author}
               <p className="text-primary">{publish}</p>
           </div>
           <div>
           <img src={authorImg} class="author-img p-3" alt="..."/>
           </div>
       </div>
   </div>
   </div>
   </div>
        </div>
    )
}

export default Blog
