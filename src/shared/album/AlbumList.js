import React from 'react';
//import './NewsList.css';

export default function AlbumList({ albums }) {
  return (
    <div>
      {albums.data.products[0].name}
      {albums.data.products[1].name}
    </div>
  );
}