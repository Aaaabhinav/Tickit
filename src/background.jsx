import { useState,useEffect,useRef } from 'react'
import image1 from './images/1.avif'
import image2 from './images/2.avif'
import image3 from './images/3.avif'
import image4 from './images/4.avif'
import image5 from './images/5.avif'
import image6 from './images/6.avif'
import image7 from './images/7.avif'
import image8 from './images/8.avif'
import image9 from './images/9.avif'
import image10 from './images/10.avif'

function Background(){

    const [currentIndex, setCurrentIndex] = useState(0);
    const imageContainerRef = useRef(null);

  const [count,setCount]=useState(0);
  const [margin,setMargin]=useState('0%');
  const [forward,setForward]=useState(true);
    const images = [
        image1, image2, image3, image4, image5,
        image6, image7, image8, image9, image10,
      ];
      useEffect(() => {
        const totalImages = images.length;
    
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => {
            if (prevIndex === totalImages) {
              imageContainerRef.current.style.transition = 'none';
              setCurrentIndex(0);
              return 0;
            } else {
              return prevIndex + 1;
            }
          });
        }, 3000); // Change image every 1 second
    
        return () => clearInterval(interval);
      }, [images.length]);
    
      useEffect(() => {
        if (currentIndex !== 0) {
          imageContainerRef.current.style.transition = 'transform 2.5s ease-in-out';
        }
        imageContainerRef.current.style.transform = `translateX(-${currentIndex * 100}vw)`;
      }, [currentIndex]);


    return(
        <div className="carousel-container">
        <div className="image-container" ref={imageContainerRef}>
          {images.map((img, index) => (
            <div className="image" key={index}>
              <img src={img} alt="" className="background" />
            </div>
          ))}
          <div className="image">
            <img src={images[0]} alt="" className="background" />
          </div>
        </div>
      </div>
    );

}
export default Background