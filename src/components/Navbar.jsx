import { ChevronDown } from 'lucide-react';
import { Users } from 'lucide-react';
import { Bell } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
function Navbar() {
  return (
    <>
      <div className="flex gap-2 items-center p-2 h-15 w-full border-b border-gray-200"><button>
        <div className="flex gap-2 p-2 bg-white text-sm rounded-xl border border-gray-200">
          <img
            src="https://d3dyfaf3iutrxo.cloudfront.net/general/upload/bbe791d38e9a4bc188b07d81691a6372.svg"
            className="h-5"
          />
          NST'25 CS+AI RU<ChevronDown/>
        </div>
        </button>
        <div className="bg-amber-100 p-1 rounded-3xl m-2 text-sm pl-3 cursor-pointer  h-11 flex items-center gap-x-6 border-gray-200 border font-semibold">
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
          <div className='border-l border-gray-200 pl-6 flex items-center gap-6 ml-6'>
          <Users />
          <Bell />
          <button className='flex hover:bg-gray-200 rounded-2xl h-10 w-15 items-center justify-center cursor-pointer'><CircleUserRound /> <ChevronDown size={20}/></button>

          </div>

        </div>
      </div>
    </>
  );
}

export default Navbar;
