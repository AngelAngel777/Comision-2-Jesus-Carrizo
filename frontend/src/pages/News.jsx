    import React, { useState, useEffect } from 'react';
    import axios from 'axios';
    
    export const News = () => {
      const [flightArticles, setFlightArticles] = useState([]);
      const apiKey = 'e8f93e0edc9d41c08be6238dec804a74'; // Reemplaza con tu propia clave de API de NewsAPI
    
      useEffect(() => {
        const obtenerNoticiasDeVuelos = async () => {
          try {
            const respuesta = await axios.get('https://newsapi.org/v2/everything', {
              params: {
                q: 'viajes', // Palabra clave de búsqueda para noticias de vuelos
                apiKey: apiKey,
                sortBy: 'publishedAt',
                language: 'es', // Idioma de las noticias (puedes cambiarlo según tu preferencia)
              },
            });
    
            setFlightArticles(respuesta.data.articles);
          } catch (error) {
            console.error('Error al obtener noticias de vuelos:', error);
          }
        };
    
        obtenerNoticiasDeVuelos();
      }, [apiKey]);
    
      return (
        <div>
          <h2 className='h2-news'>Noticias de vuelos</h2>
          <ul className='article-list'>
            {flightArticles.map((articulo, indice) => (
                <li key={indice} className='article-item'>
      <a href={articulo.url} target="_blank" rel="noopener noreferrer">
        <div className='article-info'>
          <h3 className='article-title'>{articulo.title}</h3>
          <img className='article-image' src={articulo.urlToImage} alt="" />
          <h4 className='article-time' >{articulo.publishedAt}</h4>
        </div>
      </a>
    </li>
    
            ))}
          </ul>
        </div>
      );
    };