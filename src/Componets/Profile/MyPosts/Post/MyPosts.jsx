import React from 'react';
import  './MyPosts.css';
import PostB from './PostB/PostB';
//import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../../Redux/profile-reducer';


const MyPosts = (props) => {

let postsElements = props.posts.map(p => <PostB message={p.message} likesCount={p.likesCount} />);

let newPostElement = React.createRef();

let onAddPost = () => {
  props.addPosts();//у него эта строка
  //props.dispatch(addPostActionCreator());
}

 let onPostChange = () => {//newPostChange
  let text = newPostElement.current.value;
  //let action = ({type: 'UPDATE-NEW-POST-TEXT', newText: text});
  props.updateNewPostText(text);
  //let action = updateNewPostTextActionCreator(text);//updatPostActionCreator
  //props.dispatch(action);
}

    return (
        <div className="mypost">
          <h2>My post</h2>
          <div className="textarea">
           <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
          </div>
          <div className="mypostBtn">
          <button onClick={ onAddPost }>Добавить пост</button>
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