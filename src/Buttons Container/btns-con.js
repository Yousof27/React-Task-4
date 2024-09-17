import './btns-con.css'
import img1 from './imgs/flower1.jpg';
import img2 from './imgs/flower2.jpg';

export default function BtnsContainer() {
    return (
        <div className='btns-con'>
            <Btn desc="جديدة">
                <p>💫💫💫</p>
            </Btn>
            <Btn desc="الأكثر قراءة">
                <img src={img1} alt='img'/>
            </Btn>
            <Btn desc="مقالات مميزة">
                <div>
                    <p>🌟🌟🌟</p>
                    <img src={img2} alt='img'/>
                </div>
            </Btn>
        </div>
    );
}

function Btn({desc, children}) {
    return (
        <button className='btn'>
            <p>{desc}</p>
            {children}
        </button>
    );
}
