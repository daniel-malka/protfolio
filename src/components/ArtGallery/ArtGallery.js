import images from '../../constants/constants';
import './ArtGallery.css';
function ArtGallery() {
  return (
    <section className='art-gallery'>
      <div>
        {' '}
        {images.map((piece) => {
          <div className="art__card">
            <img src={piece.source} alt={`art piece named ${piece.name}`} />
            <div className="art__card-text">
              <p>{piece.description}</p>
              <p>{piece.price}</p>
            </div>
          </div>;
        })}
      </div>
    </section>
  );
}

export default ArtGallery;
