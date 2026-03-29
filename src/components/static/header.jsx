import { useState } from "react"
import React from "react";
function Header(){
  const [estVisible, SetEstVisible] = useState(false);
    return(
  <>
    <div id="header-conteneur" className="navbar bg-amber-800 backdrop-blur-lg shadow-xs border-b border-slate-200 fixed top-0 left-0 right-0 z-40 transition-all duration-300 font-lato">
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between px-4 py-4 md:px-6">
        <div id="header-logo-conteneur" className="flex items-center gap-2">
          <a id="header-logo" className="text-2xl font-extrabold tracking-tight text-slate-900 text-white hover:scale-105 transition-transform duration-300 cursor-pointer">I-Lalana</a>
        </div>

        <div className="flex items-center gap-2">
          {estVisible && (
            <input
              id="header-search"
              type="text"
              placeholder="Soraty eto ny lalàna ..."
              className="input input-bordered w-5px rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-500 w-64 text-sm text-olive-950 shadow-sm bg-olive-50 animate-in fade-in slide-in-from-left-4 duration-700"
            />
          )}

          <button onClick={() => SetEstVisible(!estVisible)} className="btn btn-ghost btn-circle hover:scale-110 hover:bg-white/10 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="#fff">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div className="h-20"></div>
  </>
    )
}
export default Header
export estVisible