import Header from './Header/header';
import PostsContainer from './Posts Container/posts-con';
import BtnsContainer from './Buttons Container/btns-con';
import './App.css';

export default function App() {
    return (
        <>
            <Header />
            <div className='container'>
                <PostsContainer />
                <BtnsContainer />
            </div>
        </>
    );
}