import React, { Component } from 'react';

class LyricList extends Component {
  renderLyrics() {
    return this.props.lyrics.map(({ id, content }) => {
      return (
        <li key={id} className="collection-item">
          {content}
        </li>
      );
    });
  }
  render() {
    return (
      <ul>
        <ul className="collection">
          {this.renderLyrics()}
        </ul>
      </ul>
    );
  }
}

export default LyricList;
