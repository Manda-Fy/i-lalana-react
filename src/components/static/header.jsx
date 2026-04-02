import { useState } from "react"
import {Link} from "react-router-dom"
import React from "react";
function Header(){
  const [estVisible, SetEstVisible] = useState(false);
    return(
  <>
    <div id="header-conteneur" className="navbar bg-amber-800 backdrop-blur-lg shadow-xs border-b border-slate-200 fixed top-0 left-0 right-0 z-40 transition-all duration-300 font-lato">
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between px-4 py-4 md:px-6">
        <div id="header-logo-conteneur" className="flex items-center gap-2">
          <Link to="/" id="header-logo" className="text-2xl font-extrabold tracking-tight text-slate-900 text-white hover:scale-105 transition-transform duration-300 cursor-pointer">I-Lalana</Link>
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


        </div>
      </div>
    </div>
    <div className="h-20"></div>
  </>
    )
}
export default Header
