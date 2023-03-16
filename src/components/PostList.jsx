import React, {useState} from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) => {
    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>Элементы не найдены!</h1>
        )
    }
    return (
        <div>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            {posts.map(post =>
                <PostItem remove={remove} post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostList;