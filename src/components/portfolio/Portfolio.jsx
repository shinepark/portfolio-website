import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img 1.webp'
import IMG2 from '../../assets/img 2.webp'
import IMG3 from '../../assets/img 3.webp'

const data = [
  {
    id: 1,
    /*image: IMG1,*/
    title: 'Sudoku Solver',
    github: 'https://github.com/shinepark/handdetection',
    demo: 'n/a'
  },
  {
    id: 2,
    /*image: IMG2,*/
    title: 'Hand Detection Game',
    github: 'https://github.com/shinepark/sudokusolve',
    demo: 'n/a'
  },
  {
    id: 3,
    /*image: IMG3,*/
    title: 'This Website',
    github: 'https://github.com/shinepark/portfolio-website',
    demo: 'http://localhost:3000'
  }

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        {
          data.map(({id, image, title, github, demo}) =>{
            return(
              <article key={id} className='portfolio_item'>
             {/* <div className='portfolio_item-image'>
                <img src={image} alt={title} />
            </div> */}
              <h3>{title}</h3>
              <div className='portfolio_item-cta'>
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn' target='_blank'>Live Demo</a>
              </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio