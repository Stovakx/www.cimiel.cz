import React, {useEffect, useState} from "react";
import { Container } from "react-bootstrap";
import LazyLoad from 'react-lazy-load';
import getGalleryPhotos from "../utilities/getGalleryPhotos";
import '../assets/css/gallery.css';

const Gallery = ()=>{
    const galleryPath = '/gallery';
    const [imagePaths, setImagePaths] = useState([]);

  
    useEffect(() => {
      async function fetchImages() {
        const paths = await getGalleryPhotos(galleryPath);
        setImagePaths(paths);
      }
  
      fetchImages();
    }, []);
    return(
        <React.StrictMode>
            <Container className="galleryContainer ">
                <LazyLoad threshold={0.95}>    
                    <div className="image-grid">
                        {imagePaths.map((imagePath, index) => (
                        <img key={index} src={imagePath} alt='Project photo' loading="lazy" />
                        ))}
                    </div>
                </LazyLoad>
            </Container>
        </React.StrictMode>
    )
}
export default Gallery