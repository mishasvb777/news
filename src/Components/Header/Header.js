import React from 'react'
import { categoryName } from "../../utils.js";
import { categoryId } from "../../utils.js";
import './Header.css'
import logo from '../../images/logo.svg'

export const Header = ({getArticles}) => {
  const [category, setCategory] = React.useState('index')

  const onNavClick = (e) => {
    e.preventDefault();
    setCategory(e.currentTarget.dataset.href)
  }

  React.useEffect(() => {
    fetch('https://frontend.karpovcourses.net/api/v2/ru/news/' + categoryId[category] || '')
      .then(response => response.json())
      .then(data => {
        getArticles(data, category)
      })
  }, [category])

  return (
    <header className="header">
      <div className="container">
        <nav className="navigation grid">
          <ul className="navigation__list">
            <div className="navigation__image">
              <a onClick={onNavClick} href="./index.html" className="navigation__logo">
                <img src={logo} alt="logo" />
              </a>
            </div>
            {['index', 'fashion', 'tech', 'politic', 'sport'].map((el) => {
              return (
                <li className="navigation__item" key={el}>
                  <a 
                    onClick={onNavClick} 
                    data-href={el} 
                    href={`./${el}.html`} 
                    className={`navigation__link ${category === el ? 'navigation__link--active' : ''}`}>
                    { categoryName[el] }
                  </a>
                </li>
              )              
            })}           
          </ul>
        </nav>
      </div>
    </header>
  )
}