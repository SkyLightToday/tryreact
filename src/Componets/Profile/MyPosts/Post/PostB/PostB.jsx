import React from 'react';
import  './PostB.css';

const PostB = (props) => {
    return (
            <div className="post">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ7KJvCdzu6AXNRZvJ9Iju1YYBZK_1e5AKZg&usqp=CAU" alt="#" />
              {props.message}
              <div className="postlike">
                <span>Нравится {props.likesCount}</span>
              </div>
            </div>
    );
}

export default PostB;