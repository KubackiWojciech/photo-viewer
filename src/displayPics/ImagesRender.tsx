import React from 'react'
import ReactDOM from 'react-dom';
import { useBetween } from 'use-between';

import MoveButtons, { IndexStates } from './MoveButtons'

interface PicInfo {
  id: string,
  author: string,
  width: number,
  height: number,
  url: string,
  download_url: string,
}

export default function ImagesRender() {
  fetch('https://picsum.photos/v2/list')
    .then(response => response.json())
    .then(data => {
      console.log(data);

      ReactDOM.render(
        <React.StrictMode>
          <ImagesDiv urls={data.map((element: PicInfo) => element.download_url)} />
        </React.StrictMode>,
        document.getElementById('root'),

      );
    });
}

function ImagesDiv(params: { urls: string[] }) {
  const {firstPicIndex} = useBetween(IndexStates);

  return (
    <div id='pictures'>
      <MoveButtons />
      {
        params.urls.slice(firstPicIndex, firstPicIndex+3).map((element: string) =>
          <img src={element} width={400}></img>)
      }
    </div>
  )
}
