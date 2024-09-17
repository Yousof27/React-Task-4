import './posts-con.css'

export default function PostsContainer() {
    return (
        <div className='posts-con'>
            <Bost desc="أكاديمية مخصصة لتعليم البرمجة بمختلف لغاتها وتقنياتها">
                <h2>20<br />أكاديمية ترميز</h2>
            </Bost>
            <Bost desc="this is the hello world article">
                <h2>hello world</h2>
            </Bost>
            <Bost desc="this is the body of post 3">
                <h2>post 3</h2>
            </Bost>
        </div>
    );
}

function Bost({desc, children}) {
    return (
        <div className='post'>
            {children}
            <hr />
            <p className='desc'>{desc}</p>
        </div>
    );
}
