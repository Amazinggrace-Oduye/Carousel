import Form from "./Form";
import Slide from "./Slide";
function SideCarousel() {
  return (
    <div className="flex flex-col item-center justify-center">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className=" bg-white w-screen h-screen flex">
          <Slide />
          <Form />
        </div>
      </main>
    </div>
  );
}
export default SideCarousel;
