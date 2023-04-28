import './Main.css';
import image2 from '../img/image2.jpg';
import { useNavigate } from 'react-router-dom';

function Main1() {
    const navigate = useNavigate();
    const nextImage = () =>{
        navigate("/nextimage2")
    }
  return (
    <div>
      <main className='main'>
          <h1 className='main_header'>Name Of The Actor</h1>
          
      
        <section className='main_navbar'>
          <ul className='main_navbar_ul'>
            {/* <li className='main_navbar_li'>Back to gallery |</li> */}
            <li className='main_navbar_li' onClick={nextImage}>Next image</li>
            {/* <li className='main_navbar_li'>Last image</li> */}
          </ul>
        </section>
        <section className='main_image'>
          <img src={image2} alt="bhumika_chawla2" />
        </section>
      </main>
    </div>
  )
}

export default Main1;
