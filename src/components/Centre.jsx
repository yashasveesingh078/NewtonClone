import {Clock, History, ChevronLeft, ChevronRight, Trophy, Sparkles } from "lucide-react";

function Centre() {
  return (
    <div className="flex-1 overflow-y-auto bg-[#f8fafc] px-8 py-7">

      {/* ===== Section Header ===== */}
      <div className="flex items-start justify-between mb-6">

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center">
            <History size={20} className="text-gray-600" />
          </div>

          <div>
            <h1 className="text-xl font-medium text-gray-700">
              Latest Released
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              All your tasks released recently
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center">
            <ChevronLeft size={18} />
          </button>
          <button className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center">
            <ChevronRight size={18} />
          </button>
        </div>
        </div>
       <div className="relative">
       <div className="flex gap-4 w-max overflow-x-scroll scroll-smooth scrollbar-hide">
        {/* ===== Single Portal Card ===== */}
        <div className="w-79 h-73 rounded-3xl border border-gray-200 bg-[#f1f3f5] overflow-hidden">

        {/* Inner White Card */}
        <div className="bg-white rounded-3xl m-1 border border-gray-200">

          {/* Subject */}
          <div className="px-4 py-4 border-b border-gray-100">
            <p className="text-sm font-medium text-gray-600">
              WAP - A
            </p>
          </div>
          <div  className=" border-b border-gray-100 gap-2 m-f"></div>
          {/* Content */}
          <div className="px-4 py-4">

            <div className="flex items-center gap-2 text-black text-sm">
              <div className="w-7 h-7 bg-gray-100 rounded-lg flex items-center justify-center">
                <Trophy size={14} />
              </div>
              Contest
            </div>

            <h2 className="text-0.5xl font-semibold mt-2 text-gray-900">
              Practice Assignment
            </h2>

            <p className="text-sm text-gray-500 mt-4">
              Deadline is Mar 8th 2026, 6:00 pm
            </p>

            <div className="flex items-center gap-1 mt-5">
              <span className="bg-orange-100 text-orange-600 text-xs px-1.5 py-1 font-semibold">
                2X
              </span>
              <img className="h-5 w-5" src="https://d3dyfaf3iutrxo.cloudfront.net/general/upload/77ba313553d342eaa91e3e9a7ed5649c.svg" />
              <span className="text-sm font-medium text-gray-800">
                0/440
              </span>
            </div>

          </div>
        </div>

        {/* Bottom Strip */}
        <div className="flex items-center justify-between px-5 py-1 bg-[#eef0f2]">

          <p className="text-sm text-gray-700">
            <span className="text-xl font-medium text-gray-900">0</span>
            <span className="text-gray-500"> / 16 Solved</span>
          </p>

          <button className="bg-black text-white px-10 py-3 rounded-xl text-sm font-medium">
            Solve
          </button>
        </div>

        </div>
        {/* ===== Single Portal Card ===== */}
         <div className="w-79 h-73 rounded-3xl border border-gray-200 bg-[#dac0ee] overflow-hidden">

        {/* Inner White Card */}
        <div className="bg-white rounded-3xl m-1 border border-gray-200">

          {/* Subject */}
          <div className="px-4 py-4 border-b border-gray-100">
            <p className="text-sm font-medium text-gray-600">
              DSA - A
            </p>
          </div>
          <div  className=" border-b border-gray-100 gap-2 m-f"></div>
          {/* Content */}
          <div className="px-4 py-4">

            <div className="flex items-center gap-2 text-black text-sm">
              <div className="w-7 h-7 bg-[#dac0ee] rounded-lg flex items-center justify-center">
                <Sparkles size={14} />
              </div>
              AI Mock Interview
            </div>

            <h2 className="text-0.5xl font-semibold mt-2 text-gray-900">
              DSA Mock AI Interview
            </h2>

            <p className="text-sm text-gray-500 mt-4">
              Deadline is Mar 9th 2026, 6:00 pm
            </p>

            <div className="gap-1 mt-5 flex items-center justify-between">
              <span className="text-sm text-gray-500">Attempts Left: 3 </span>
            </div>

          </div>
        </div>

        {/* Bottom Strip */}
         <div className="flex items-center justify-between px-5 py-1 bg-[#dac0ee]">

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Clock size={14} />
            <span>45 minutes</span>
          </div>
          <button className="bg-black text-white px-10 py-3 rounded-xl text-sm font-medium">
            Attempt
          </button>
         </div>
        
        </div>
                {/* ===== Single Portal Card ===== */}
        <div className="w-79 h-73 rounded-3xl border border-gray-200 bg-[#a0ebc2] overflow-hidden">

        {/* Inner White Card */}
        <div className="bg-white rounded-3xl m-1 border border-gray-200">

          {/* Subject */}
          <div className="px-4 py-4 border-b border-gray-100">
            <p className="text-sm font-medium text-gray-600">
              DSA - A
            </p>
          </div>
          <div  className=" border-b border-gray-100 gap-2 m-f"></div>
          {/* Content */}
          <div className="px-4 py-4">

            <div className="flex items-center gap-2 text-black text-sm">
              <div className="w-7 h-7 bg-[#a0ebc2] rounded-lg flex items-center justify-center">
                <Trophy size={14} />
              </div>
              Contest
            </div>

            <h2 className="text-0.5xl font-semibold mt-2 text-gray-900">
              DSA Assignment 4 - Binary Search 
            </h2>

            <p className="text-sm text-gray-500 mt-4">
              Deadline is Mar 8th 2026, 11:00 am
            </p>

            <div className="flex items-center gap-1 mt-5">
              <span className="bg-orange-100 text-orange-600 text-xs px-1.5 py-1 font-semibold">
                2X
              </span>
              <img className="h-5 w-5" src="https://d3dyfaf3iutrxo.cloudfront.net/general/upload/77ba313553d342eaa91e3e9a7ed5649c.svg" />
              <span className="text-sm font-medium text-gray-800">
                0/440
              </span>
            </div>

          </div>
        </div>

        {/* Bottom Strip */}
        <div className="flex items-center justify-between px-5 py-1 bg-[#a0ebc2]">

          <p className="text-sm text-gray-700">
            <span className="text-xl font-medium text-green-700">31</span>
            <span className="text-green-700"> / 31 Solved</span>
          </p>

          <button className="bg-black text-white px-10 py-3 rounded-xl text-sm font-medium">
            Solve
          </button>
        </div>

        </div>
      </div>
      </div>
     <div  className=" border-b border-gray-300 m-4 min-w-fit"></div> 
    </div>
  );
}

export default Centre;
