import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {details} = props
  const {thumbnailUrl, videoUrl} = details // Assume movieDetails contains videoUrl

  return (
    <div>
      <Popup
        modal
        trigger={
          <img
            src={thumbnailUrl}
            alt="thumbnail"
            style={{width: '200px', cursor: 'pointer'}}
          />
        }
        className="popup-content"
      >
        {(
          close, // 'close' function to close the modal
        ) => (
          <div className="modal">
            <button
              type="button"
              className="close-button"
              onClick={close}
              data-testid="closeButton"
            >
              <IoMdClose />
            </button>
            <h2>Movie Trailer</h2>
            <iframe
              width="100%"
              height="400"
              src={videoUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Movie Video"
            />
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
