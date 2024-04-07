import './card.css'

export function CardComp({ imageList = [] }) {
  return (
    <div className="gallery-container">
      {imageList.map((image, index) => {
        return <img  className="card-image" src={image.url} key={index} alt="loading..." />;
      })}
    </div>
  );
}
