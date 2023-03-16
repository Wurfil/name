import {useMemo, useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./components/hooks/usePosts";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'GGDFsad ___1___', body: 'dsaasdadasd text'},
        {id: 2, title: 'Hedasd ___2___', body: 'Someeee dasdasd'},
        {id: 3, title: 'HeadJdaasdasd ___3___', body: 'dasd text'}
    ])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const  sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
                Создать запись
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} serFilter={setFilter}/>
            <PostList remove={removePost} posts={sortedAndSearchPosts} title="0001"/>
        </div>
    );
}

export default App;
