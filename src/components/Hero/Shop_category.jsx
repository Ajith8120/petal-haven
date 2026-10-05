import React from 'react'
import { Link } from 'react-router-dom'
import petals from '../../assets/category/cat11.png'
import tuberose from '../../assets/category/cat22.png'
import lotus from '../../assets/category/cat33.png'
import cardamom from '../../assets/category/cat44.png'
import './Shop_category.css'

const categories = [
  { name: 'Petals Garlands', image: petals, href: '/Flowers', alt: 'Fresh flowers arranged for gifting' },
  { name: 'Tuberose Garlands', image: tuberose, href: '/Wedding-Garlands', alt: 'Floral wedding garland collection' },
  { name: 'Lotus & Crape Jasmine Garlands', image: lotus, href: '/Garlands', alt: 'Traditional handcrafted garlands' },
  { name: 'Cardamom Garlands', image: cardamom, href: '/Garlands', alt: 'Bridal garland collection' },
]

const Shop_category = () => (
  <section className="shop-categories" aria-labelledby="shop-categories-title">
    <div className="container">
      <header className="shop-categories-heading text-center">
        <h2 id="shop-categories-title">Shop By <span className="shop-categories-accent">Categories</span></h2>
      </header>

      <div className="row justify-content-center g-4 g-lg-5">
        {categories.map((category) => (
          <div className="col-6 col-lg-3" key={category.name}>
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
