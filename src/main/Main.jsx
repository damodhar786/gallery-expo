import './Main.css';
import image1 from '../img/image1.jpg';
import { useNavigate } from 'react-router-dom';

function Main() {

  const navigate = useNavigate();
  const nextImage = () =>{
      navigate("/nextimage1")
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
          <img src={image1} alt="bhumika_chawla1" />
        </section>
      </main>
    </div>
  )
}

export default Main
