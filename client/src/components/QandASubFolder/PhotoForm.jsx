import React from 'react';
import './Modal.css';

const PhotoForm = ({
  showSetPhotoForm, modalFunctions, photos, photo,
}) => (
  <div id="modal" data-testid="photo-form">
    <div className="overlay">
      <div className="modal-content">
        <div>
          <button className="modal-close" type="button" data-testid="close-photo-form" onClick={() => showSetPhotoForm(false)}>X</button>
        </div>
        <div className="main-content">
          <span className="answer-photos">
            {photos.map((img) => <img className="answer-photo" src={img} alt="answer" key={img} />)}
          </span>
          <form>
            <p>Select image: </p>
            <input type="text" placeholder="please enter photo URL" className="modal-input" value={photo} onChange={modalFunctions.photoChange} />
            {
              photos.length > 4 ? <p>Only 5 photos allowed per answer</p> : <button className="submission" type="button" onClick={modalFunctions.photosChange}>Add Photo</button>
            }
            <button className="submission" type="button" onClick={() => showSetPhotoForm(false)}>Submit Photos</button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default PhotoForm;
