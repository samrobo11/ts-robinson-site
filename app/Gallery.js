'use client';
import { useRef, useState } from 'react';
import photos from './photos.json';

export default function Gallery() {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState(0);
  const dialog = useRef(null);
  function open(index) { setSelected(index); dialog.current.showModal(); }
  function move(delta) { setSelected(index => (index + delta + photos.length) % photos.length); }
  return (
    <section id="photos" className="photo-section" aria-labelledby="photos-heading">
      <div className="photo-inner">
        <div className="section-eyebrow">From our market to your business</div>
        <div className="photo-heading"><h2 id="photos-heading">A closer look at T&amp;S.</h2><p>Our produce, our vehicles and life at the market.<br />Tap a photo to take a closer look.</p></div>
        <div className="photo-grid" id="photo-grid">
          {(expanded ? photos : photos.slice(0,6)).map((photo,index)=>(
            <button className="photo-tile" type="button" key={photo.src} onClick={()=>open(index)} aria-label={`View photo: ${photo.title}`}>
              <img src={photo.src} alt={photo.alt} width="600" height="450" loading="lazy" decoding="async" />
              <span className="photo-caption">{photo.title}<span aria-hidden="true">↗</span></span>
            </button>
          ))}
        </div>
        <button type="button" className="gallery-more" aria-expanded={expanded} aria-controls="photo-grid" onClick={()=>setExpanded(!expanded)}>{expanded ? 'Show fewer photos' : `View all ${photos.length} photos`} <span aria-hidden="true">{expanded?'−':'+'}</span></button>
        <p className="gallery-note">A selection from our range. Contact us for current availability.</p>
        <a className="tiktok-card" href="https://www.tiktok.com/@ts.robinson" target="_blank" rel="noopener noreferrer" aria-label="Visit T&S Robinson on TikTok (opens in a new tab)">
          <span className="tiktok-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="56" height="56" fill="currentColor"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743 2.895 2.895 0 0 1 2.31-4.64c.298 0 .596.043.881.13V9.407a6.344 6.344 0 0 0-5.394 10.692 6.342 6.342 0 0 0 10.849-4.427V8.686a8.182 8.182 0 0 0 4.773 1.526V6.79a4.83 4.83 0 0 1-1.003-.104z" /></svg></span>
          <span className="tiktok-copy"><span className="social-eyebrow">Behind the scenes</span><strong>Find us on TikTok.</strong><span>@ts.robinson</span></span>
          <span className="tiktok-cta">Watch our videos <span aria-hidden="true">↗</span></span>
        </a>
      </div>
      <dialog ref={dialog} className="photo-dialog" aria-label="Photo viewer" onClick={e=>{if(e.target===e.currentTarget)dialog.current.close()}} onKeyDown={e=>{if(e.key==='ArrowRight'){e.preventDefault();move(1)}if(e.key==='ArrowLeft'){e.preventDefault();move(-1)}}}>
        <div className="photo-dialog-inner">
          <button type="button" className="photo-close" onClick={()=>dialog.current.close()} aria-label="Close photo viewer" autoFocus>×</button>
          <img src={photos[selected].src} alt={photos[selected].alt} />
          <div className="photo-controls"><button type="button" onClick={()=>move(-1)} aria-label="Previous photo">←</button><p aria-live="polite">{photos[selected].title}<small>{selected+1} / {photos.length}</small></p><button type="button" onClick={()=>move(1)} aria-label="Next photo">→</button></div>
        </div>
      </dialog>
    </section>
  );
}
