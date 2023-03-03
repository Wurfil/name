import React from 'react';
import '../style/style.css'
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post_content">
                <strong>{props.post.id} {props.post.title}</strong>
                <div>{props.post.body}</div>
            </div>
            <MyButton onClick={() => props.remove(props.post)} className="post_btn">
                Удалить
            </MyButton>
        </div>
    );
};

export default PostItem;