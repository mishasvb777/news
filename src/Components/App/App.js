import React from 'react'
import { Header } from '../Header/Header.js'
import { MainArticle } from '../MainArticle/MainArticle.js'
import './App.css'

export const App = () => {
  const [articles, setArticles] = React.useState({ items: [], categories: [], sources: [] })
  const [categories, setCategories] = React.useState('index')

  const getArticles = (articles, category) => {
    setCategories(category)
    setArticles(articles)
  }

  return (
    <>
      <Header getArticles = {getArticles}/>
      <main className="main">
        <div className="container grid">
          <section className="articles__big-column">
            <article className="main-article">
              {articles.items.slice(0, 3).map(el => (
                <MainArticle 
                  image={el.image} 
                  title={el.title} 
                  description={el.description}
                  categories = {articles.categories.find(({id}) => el.category_id === id).name}
                  sources = {articles.sources.find(({id}) => el.source_id === id).name}   
                 />
              ))}             
            </article>
          </section>
          <section className="articles__small-column">
            <article className="small-article">
            </article>
          </section>
        </div>
      </main>
      <footer className="footer"></footer> 
    </>
  )
}