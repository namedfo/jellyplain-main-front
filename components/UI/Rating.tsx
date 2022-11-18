import { useState } from "react";


type RatingProps = {
    size?: number;
    handleRating?: any
}

export default function Rating({ size, handleRating }: RatingProps) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);


  const onHandleChangeRating = (index: number) => {
    setRating(index)
    handleRating(index)
  }

  return (
    <div className="flex items-center">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "text-[#3ea938]" : "text-[#ccc]"}
            onClick={() => onHandleChangeRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className={`text-[24px]`}>&#9733;</span>
          </button>
        );
      })}
    </div>
  );
}
