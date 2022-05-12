import React from 'react';
import  './MyPosts.css';
import PostB from './PostB/PostB';

const MyPosts = (props) => {
//   let posts = [
//     {id: 1, message: 'Привет! Как дела?', likesCount: 32},
//     {id: 2, message: 'Это мой первый пост.', likesCount: 47},
// ];

let postsElements = props.posts.map(p => <PostB message={p.message} likesCount={p.likesCount} />);

let newPostElement = React.createRef();

let addPosts = () => {
  let text = newPostElement.current.value;
  alert(text);
}

    return (
        <div className="mypost">
          <h2>My post</h2>
          <div className="textarea">
          <textarea ref={newPostElement}></textarea>
          </div>
          <div className="mypostBtn">
          <button onClick={addPosts}>Добавить пост</button>
          </div>
          <div>
            <h2>New posts</h2>
          </div>
          <div className="mypostMess">
            {postsElements}
          </div>
        </div>
    );
}

export default MyPosts;