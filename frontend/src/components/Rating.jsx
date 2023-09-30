import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Rating = ({ value, text }) => {
    return (
        <div className='rating' >
            {
                [1, 2, 3, 4, 5].map(num => (
                    <span key={num}>
                        {value >= num ? <FaStar /> : value >= (num - 0.5) ? <FaStarHalfAlt /> : <FaRegStar />}
                    </span>
                ))
            }
            <span className="rating-text">{text && text}</span>
        </div>
    )
}

export default Rating