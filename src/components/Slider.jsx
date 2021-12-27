const Slider = () => {
  return (
    // Need to add the carousel but for now, doing this like a normal block
    <div className="flex flex-col justify-center items-center bg-gray-300 h-96 mx-5">
      <h2 className="text-3xl">Welcome to Florange. Your one stop shop</h2>
      <p className="mt-3">We don't follow trends, we set them</p>
      <div className="space-x-3 mt-2">
        <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-indigo-600">
          Register
        </button>
        <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-indigo-600">
          Signin
        </button>
      </div>
    </div>
  );
};

export default Slider;
