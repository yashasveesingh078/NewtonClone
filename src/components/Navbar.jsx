function Navbar() {
  return (
    <>
      <div className="flex gap-2 items-center p-2 h-15 w-full border-b border-gray-200">
        <div className="flex gap-2 p-2 bg-white text-sm rounded-xl border border-gray-200">
          <img
            src="https://d3dyfaf3iutrxo.cloudfront.net/general/upload/bbe791d38e9a4bc188b07d81691a6372.svg"
            className="h-5"
          />
          NST'25 CS+AI RU
        </div>
        <div className="gap-2 pl-5 pr-5 pt-1 pb-1 bg-amber-100 text-sm rounded-3xl font-bold border border-gray-200">
          Download latest version of Athena.
          <button className=" bg-amber-600 pt-1.5 pb-1.5 pl-2 pr-2 text-sm rounded-2xl text-white font-bold">
            Download
          </button>
        </div>
        <div className="ml-auto flex items-center gap-10 border-r border-gray-200">
          <div className="ml-auto flex items-center gap-2 pl-2 pr-2 pt-0.5 pb-0.5 bg-white text-sm rounded-3xl border border-gray-200 font-semibold">
            Total XP
            <div className="flex justify-between items-center bg-amber-100 p-1 rounded-3xl">
              <img src="https://d3dyfaf3iutrxo.cloudfront.net/general/upload/77ba313553d342eaa91e3e9a7ed5649c.svg" />
              <p>10,768</p>
            </div>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
