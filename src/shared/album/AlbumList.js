import React from "react";
//import "./NewsList.css";

export default function AlbumList({ albums }) {
  return (
    <div>
      <div className="header">
        <strong>Albums</strong>
      </div>
      {albums &&
        albums.map(album =>
          <div key={album.id}>
            <p>{album.title}</p>
          </div>
        )}
    </div>
  );
}