import React from 'react'
import { Link } from 'react-router-dom'
import bridalGarland from '../../assets/category/cat11.png'
import floralGarland from '../../assets/category/cat22.png'
import './Bouq.css'

const Bouq = () => (
  <section className="bouq-promo" aria-labelledby="bouq-promo-title">
    <div className="container">
      <div className="bouq-promo-card row g-0 align-items-stretch">
        <div className="bouq-gallery col-12 col-lg-5">
          <div className="bouq-photo bouq-photo-main">
            <img src={bridalGarland} alt="Handcrafted pink floral garlands" />
          </div>
          <div className="bouq-photo bouq-photo-secondary">
            <img src={floralGarland} alt="Traditional floral garland collection" />
          </div>
        </div>

        <div className="bouq-copy col-12 col-lg-7">
          <span className="bouq-sparkle bouq-sparkle-top" aria-hidden="true">✿</span>
          <span className="bouq-sparkle bouq-sparkle-side" aria-hidden="true">✽</span>
          <p className="bouq-eyebrow">Made with love, for your forever</p>
          <h2 id="bouq-promo-title">Shop Our Valentine’s Day <span>Collection</span></h2>
          <p className="bouq-description">
            Celebrate love with thoughtfully handcrafted floral garlands. From romantic rose details
            to timeless wedding favourites, find a beautiful way to make every moment feel special.
          </p>
          <Link className="btn bouq-cta" to="/Flowers">Shop the collection <span aria-hidden="true">→</span></Link>
          <span className="bouq-sparkle bouq-sparkle-bottom" aria-hidden="true">❀</span>
        </div>
      </div>
    </div>
  </section>
)

export default Bouq
