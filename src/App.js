import PostItem from "./components/PostItem";
import {useRef, useState} from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'HeadJS ___1___', body: 'Someeee text'},
        {id: 2, title: 'HeadJS ___2___', body: 'Someeee text'},
        {id: 3, title: 'HeadJS ___3___', body: 'Someeee text'}
    ])
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    return (
        <div className="App">
            <PostForm create={createPost} />
            <div>
                <select name="" id="">
                    <option value="value1">По названию</option>
                    <option value="value2">По описанию</option>
                </select>
            </div>
            {posts.length
                ? <PostList remove={removePost} posts={posts} title="0001"/>
                : <h1 style={{textAlign: 'center'}}>Список пуст</h1>
            }

        </div>
    );
}

export default App;
