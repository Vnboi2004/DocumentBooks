import React from 'react';
import './Modal.css';


const Modal = ({show, item, onClose}) => {
    if (!show) return null;
    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    return (
    <>
        <div className='overlay'>
            <div className="overlay-inner">
                <button className="close" onClick={onClose}>
                    <box-icon name='x'></box-icon>
                </button>
                <div className="inner-box">
                    <img src={thumbnail} alt="" />
                    <div className="info">
                        <h1>{item.volumeInfo.title}</h1>
                        <h3>{item.volumeInfo.authors}</h3>
                        <h4>{item.volumeInfo.publisher}</h4>
                        <span>{item.volumeInfo.publishedDate}</span>
                        <a href={item.volumeInfo.previewLink}><button>More</button></a>
                    </div>
                </div>
                <div className="description">
                {item.volumeInfo.description}
                </div>
            </div>
        </div>
    </>
  )
}

export default Modal
