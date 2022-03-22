import { IndexStates } from "../indexHandler/MoveButtons"
import { useBetween } from "use-between"

import { PicInfo } from './PicInfo'
import PicDescription from "./PicDescription"

import './PicsContainer.css'

export default function PicsContainer(params: { data: PicInfo[] }) {
    const { firstPicIndex } = useBetween(IndexStates);

    return (
        <div id='pictures'>
            {
                params.data.slice(firstPicIndex, firstPicIndex + 3).map((element: PicInfo) => (
                    <div className="outer-pic-box">
                        <div className='picture-box'>
                            <img className='picture' src={element.download_url}></img>
                            <PicDescription element={element} />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
