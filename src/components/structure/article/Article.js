import React, { Component } from 'react';
import GoogleMapCmp from '../../map/GoogleMapCmp';
import './article.scss';

class Article extends Component {
  render() {
    return (
      <article className="article__base">
        <GoogleMapCmp />
      </article>
    )
  }
}

export default Article;