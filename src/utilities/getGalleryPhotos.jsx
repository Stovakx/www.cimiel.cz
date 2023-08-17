
const getGalleryPhotos = async()=>{
    const photos = import.meta.glob(`/public/gallery/*.*`);

  const photoPaths = Object.keys(photos);

  const photoUrls = await Promise.all(photoPaths.map(async (path) => {
    const photoModule = await photos[path]();
    return photoModule.default; 
  }));

  return photoUrls;
}

export default getGalleryPhotos;