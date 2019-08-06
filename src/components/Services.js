import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'free cocktail',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, expedita?'
      },
      {
        icon: <FaHiking />,
        title: 'free Hiking',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, expedita?'
      },
      {
        icon: <FaShuttleVan />,
        title: 'free shuttle',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, expedita?'
      },
      {
        icon: <FaBeer />,
        title: 'free beer',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, expedita?'
      }
    ]
  };
  render() {
    return (
      <section className='services'>
        <Title title='Sevices' />
        <div className='services-center'>
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className='service'>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
