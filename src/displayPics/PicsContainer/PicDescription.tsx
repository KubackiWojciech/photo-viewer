import { PicInfo } from './PicInfo'

import './Description.css'

export default function PicDescription(params: { element: PicInfo }) {
    return (
        <div className="info">
            <ul className='description-container'>
                <li className="single-line-in-description">{'Author: ' + params.element.author}</li>
                <li className="single-line-in-description">{'Size: ' + params.element.width + 'x' + params.element.height}</li>
            </ul>
        </div>
    )
}