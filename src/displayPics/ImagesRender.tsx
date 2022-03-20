import React from 'react'
import ReactDOM from 'react-dom';

import { MoveLeftButton, MoveRightButton } from './MoveButtons/MoveButtons'

import './ImagesRender.css'
import PicsContainer from './PicsContainer/PicsContainer';

export interface PicInfo {
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
    .then(data => renderContentToHTML(data));
}

function renderContentToHTML(data: PicInfo[]) {
  ReactDOM.render(
    <React.StrictMode>
      <ImagesDiv data = {data} />
    </React.StrictMode>,
    document.getElementById('root')

  );
} 

function ImagesDiv(params: {data: PicInfo[]}) {
  return (
    <>
      <MoveLeftButton />
      <PicsContainer data = {params.data} />
      <MoveRightButton />
    </>
  )
}
