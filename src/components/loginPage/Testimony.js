import profilePic from "../../images/avarter.jpeg";
function Testimony() {
  return (
    <div className="w-full h-full bg-blue-400">
      <div className="text-left font-bold px-3 mt-4 text-white text-xl">
        Cet<span className="text-blue-500">on</span>
      </div>
      <div className=" text-white px-10 mt-80 text-2xl">
        <h2 className="font-bold">Hello, Friends!</h2>
        <h2 className="font-bold">
          I&apos;m using Centon to manage my business
        </h2>
        <h2 className="font-bold">
          I can&apos;t imagine working without Cet
          <span className="text-blue-500">on</span>
        </h2>
      </div>
      <div className="relative">
        <img
          className="rounded-full relative mx-auto my-6"
          alt="user"
          src={profilePic}
          width={50}
          height={50}
        />
        <h6 className="font-bold">Kelly Williams</h6>
        <h6 className=" text-gray-200 text-base font-bold">CEO, Business 1</h6>
        <p>⭐⭐⭐⭐⭐✨</p>
      </div>
    </div>
  );
}
export default Testimony;
