import {useEffect, useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./components/hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";
import {useFetching} from "./components/hooks/useFetching";
import {getPageCount, getPagesArray} from "./components/utils/pages";

function App() {

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)
    let pagesArray = getPagesArray(totalPages)

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
        setPosts(response.data)
    })
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }
    useEffect(() => {
        fetchPosts()
    }, [])

    const changePage = (page) => {
        setPage(page)
        fetchPosts()
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (<div className="App">
        <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
            Создать запись
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
            <PostForm create={createPost}/>
        </MyModal>
        <hr style={{margin: '15px 0'}}/>
        <PostFilter filter={filter} serFilter={setFilter}/>
        {postError && <h1 style={{display: 'flex', justifyContent: 'center'}}>Произошла ошибка ${postError}</h1>}
        {isPostsLoading ?
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div> :
            <PostList remove={removePost} posts={sortedAndSearchPosts} title="0001"/>}
        <div className="page_wrapper">
            {pagesArray.map(p =>
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? 'page page__current' : 'page'}
                >
                    {p}
                </span>
            )}
        </div>
    </div>);
}

export default App;
