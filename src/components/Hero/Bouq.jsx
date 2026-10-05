import React from 'react'
import { Link } from 'react-router-dom'
import bridalGarland from '../../assets/boq/bo1.jpg'
import floralGarland from '../../assets/boq/bo2.jpg'
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
          <p className="bouq-eyebrow">MADE WITH LOVE, FOR EVERY SPECIAL MOMENT</p>
          <h2 id="bouq-promo-title"> BLOOMING WITH LOVE,JUST FOR <span>You<span className="bouq-heart" aria-hidden="true">♥</span></span></h2>
          <p className="bouq-description">
            Thoughtfully handcrafted bouquets filled with fresh blooms, soft colours and timeless
            beauty — made to turn every special moment into a beautiful memory.
          </p>
          <Link className="btn bouq-cta" to="/Bouquets">Explore Bouquets<span aria-hidden="true">→</span></Link>
          <span className="bouq-sparkle bouq-sparkle-bottom" aria-hidden="true">❀</span>
        </div>
      </div>
    </div>
  </section>
)

export default Bouq
