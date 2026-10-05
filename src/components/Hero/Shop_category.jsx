import React from 'react'
import { Link } from 'react-router-dom'
import petals from '../../assets/category/cat11.png'
import tuberose from '../../assets/category/cat22.png'
import lotus from '../../assets/category/cat33.png'
import cardamom from '../../assets/category/cat44.png'

const categories = [
  { name: 'Petals Garlands', image: petals, href: '/Flowers', alt: 'Fresh flowers arranged for gifting' },
  { name: 'Tuberose Garlands', image: tuberose, href: '/Wedding-Garlands', alt: 'Floral wedding garland collection' },
  { name: 'Lotus & Crape Jasmine  Garlands', image: lotus, href: '/Garlands', alt: 'Traditional handcrafted garlands' },
  { name: 'Cardamom Garlands', image: cardamom, href: '/Garlands', alt: 'Bridal garland collection' },
]

const Shop_category = () => (
  <section className="shop-categories pb-5" aria-labelledby="shop-categories-title">
    <div className="container">
      <header className="shop-categories-heading text-center mb-4 mb-md-5">
        <span className="shop-categories-eyebrow">Fresh Flowers</span>
        <h2 id="shop-categories-title">Shop By <span className="shop-categories-highlight">Categories<span className="shop-categories-heart" aria-hidden="true">♡</span></span></h2>
      </header>

      <div className="row justify-content-center g-4 g-lg-5">
        {categories.map((category) => (
          <div className="col-6 col-md-3" key={category.name}>
            <article className="shop-category-card text-center h-100">
              <Link className="shop-category-image-link" to={category.href} aria-label={`Shop ${category.name}`}>
                <img className="shop-category-image img-fluid" src={category.image} alt={category.alt} />
              </Link>
              <h3 className="shop-category-title">{category.name}</h3>
              <Link className="shop-category-link" to={category.href}>Shop Now</Link>
            </article>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Shop_category
