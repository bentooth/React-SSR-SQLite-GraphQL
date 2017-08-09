import React from "react";

export default function AlbumList({ albums }) {
  return (
    <div>
      {albums &&
        albums.map(album =>
          <div key={albums.id}>
            <p>
              {albums.title}
            </p>
          </div>
        )}
    </div>
  );
}