import React from 'react';
import  './PostB.css';

const PostB = (props) => {
    return (
            <div className="post">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF8f-4lHHNzPP7LS2uKUoURmFoIfFaEUmKOLmc0_IUk5SCfLe8kmtKFYf365Lx0yDxLbY&usqp=CAU" alt="#" />
              {props.message}
              <div className="postlike">
                <span>Нравится {props.likesCount}</span>
              </div>
            </div>
    );
}

export default PostB;