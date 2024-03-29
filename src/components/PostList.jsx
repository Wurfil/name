import React, {useState} from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, title, remove}) => {
    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>Элементы не найдены!</h1>
        )
    }
    return (
        <div>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            <TransitionGroup>
                {posts.map(post =>
                    <CSSTransition
                        key={posts.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem remove={remove} post={post} key={post.id}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;