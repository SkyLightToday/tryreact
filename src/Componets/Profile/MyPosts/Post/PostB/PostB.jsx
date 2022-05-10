import React from 'react';
import  './PostB.css';

const PostB = (props) => {
    return (
            <div className="post">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjH1eKQieF6XlBBUs-POy389ni30B4YNJU9acXDU5i75VavYZOmb5X0hH70VK_1fcCmWw&usqp=CAU" alt="#" />
              {props.message}
              <div>
                <span>Нравится {props.likesCount}</span>
              </div>
            </div>
    );
}

export default PostB;