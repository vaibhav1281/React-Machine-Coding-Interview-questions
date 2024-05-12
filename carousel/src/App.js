import "./App.css";
import { useState } from "react";

function App() {
  const [index, setIndex] = useState(0);

  const carouselItems = [
    "https://images.pexels.com/photos/23884548/pexels-photo-23884548/free-photo-of-a-view-of-a-valley-with-a-mountain-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/23499712/pexels-photo-23499712/free-photo-of-a-mountain-range-with-a-green-valley-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/14035701/pexels-photo-14035701.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/23499711/pexels-photo-23499711/free-photo-of-a-sunset-over-the-mountains-with-clouds-and-fog.jpeg?auto=compress&cs=tinysrgb&w=400",
  ];

  const handlePrev = () => {
    if (index > 0 && index < carouselItems.length) {
      setIndex(index - 1);
    } else {
      setIndex(carouselItems.length - 1);
    }
  };

  const handleNext = () => {
    if (index < carouselItems.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  return (
    <div className="App">
      <div className="toggle">
        <h2>React Carousel</h2>
        <div>
          <button onClick={handlePrev}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          <button onClick={handleNext}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="img-div">
        {carouselItems.map((image, i) =>
          i === index ? (
            <img
              alt=""
              src={image}
              loading="lazy"
              style={{ width: "500px", height: "400px" }}
            />
          ) : null
        )}
      </div>
    </div>
  );
}

export default App;
