import { faThumbsUp as faThumbsUpReguler } from '@fortawesome/free-regular-svg-icons'
import { faThumbsUp as faThumbsUpSolid } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'



const Like = () => {
    const [like, setLike] = useState(false)
    return (
        <button className='w-8 h-8' onClick={() => setLike(!like)}>
            {
                <FontAwesomeIcon icon={like ? faThumbsUpSolid : faThumbsUpReguler} className={`active:scale-150 transition-all duration-180 ${like ? 'text-cyan-300' : 'text-white'}`}></FontAwesomeIcon>
            }
        </button>
    )
}

export default Like
