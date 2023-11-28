import React from 'react'
import './MainArticle.css'

export const MainArticle = ({image, title, categories, description, sources}) => {
  return (    
    <div style={{display: 'flex', marginBottom: '20px' }}>
      <img src={image} style={{width: '200px', height: '200px', marginRight: '20px'}}/>
      <div>
        <h1 style={{marginTop: '0'}}>{title}</h1>
        <b>{description}</b>
        <br />
        <span>
          Категория: {categories}                    
        </span>
        <br />
        <span>
          Источник: {sources}                 
        </span>
      </div>
    </div> 
  )
}