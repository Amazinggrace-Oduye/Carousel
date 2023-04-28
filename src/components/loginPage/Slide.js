import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useState } from "react";
import Testimony from "./Testimony";
const slides = [
  {
    url: "https://media.istockphoto.com/id/1332113666/de/foto/junge-gesch%C3%A4ftsfrau-mit-digitalem-tablet.jpg?s=612x612&w=0&k=20&c=ikK5CGcmadWZpOol9BQN8ckYPu6BqxbuG7zvbpsZ8Sg=",
  },
  {
    url: "https://media.istockphoto.com/id/1368573426/de/foto/reifer-afrikanischer-mann-spricht-auf-handy-mit-laptop-im-b%C3%BCro.jpg?s=612x612&w=0&k=20&c=G_zhfRJwxReGO31IFfruHQwCHMNxQCpKzLzkAVsaFhw=",
  },

  {
    url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
  },
];

function Slide() {
  // useEffect(() => {
  //   startSlider();
  // });

  // const startSlider = () => {
  //   setInterval(() => {
  //     nextSlide();
  //   }, 5000);
  // };

  const [currentIndex, setCurrentIndex] = useState(0);
  const previousSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  let isLastSlide = currentIndex === slides.length - 1;
  const nextSlide = () => {
    isLastSlide = currentIndex === slides.length - 1;
    console.log({ isLastSlide });
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div
      style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      className="w-full h-full bg-cover bg-center duration-500 relative group"
    >
      {/* left and right arrow */}
      <div className="hidden absolute group-hover:block top-[50%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl  p-2 text-white cursor-pointer">
        <BsChevronCompactLeft size={30} onClick={previousSlide} />
      </div>
      <div className="hidden absolute group-hover:block top-[50%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl  p-2 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      {isLastSlide && <Testimony />}
    </div>
  );
}
export default Slide;
