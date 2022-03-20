import { IndexStates } from "../MoveButtons/MoveButtons"
import { useBetween } from "use-between"

import {PicInfo} from '../ImagesRender'

import './PicsContainer.css'

export default function PicsContainer(params: {data: PicInfo[]}) {
    const { firstPicIndex } = useBetween(IndexStates);

    return (
        <div id='pictures'>
            {
                params.data.slice(firstPicIndex, firstPicIndex + 3).map((element: PicInfo) => (
                    <div className="outer-pic-box">
                        <div className='picture-box'>
                            <img className='picture' src={element.download_url}></img>
                            <div className="info">
                                <ul className = 'description-container'>
                                    <li className="single-line-in-description">{'Author: ' + element.author}</li>
                                    <li className="single-line-in-description">{'Size: ' + element.width + 'x' + element.height}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
