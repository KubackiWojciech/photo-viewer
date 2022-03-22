import React from 'react'
import ReactDOM from 'react-dom';

import { MoveLeftButton, MoveRightButton } from './indexHandler/MoveButtons'
import PicsContainer from './PicsContainer/PicsContainer';
import { PicInfo } from './PicsContainer/PicInfo'

import './ImagesRender.css'

export default function ImagesRender() {
  fetch('https://picsum.photos/v2/list')
    .then(response => response.json())
    .then(data => renderContentToHTML(data));
}

function renderContentToHTML(data: PicInfo[]) {
  ReactDOM.render(
    <React.StrictMode>
      <ImagesDiv data={data} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

function ImagesDiv(params: { data: PicInfo[] }) {
  return (
    <>
      <MoveLeftButton />
      <PicsContainer data={params.data} />
      <MoveRightButton />
    </>
  )
}
