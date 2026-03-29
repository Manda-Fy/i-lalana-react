import React from "react";
import Header from "../static/header.jsx";
import Footer from "../static/footer.jsx";
import heroImage from "../../assets/image-hero-home.jpg";
import { useState } from 'react';
function Home(){
    return(
      <>
        <Header />

        <main id="main-home" className="min-h-screen bg-gradient-to-t from-olive-100 via-stone-50 to white text-slate-900 font-lato">
          <section id="hero-section" className="max-w-6xl mx-auto px-5 py-16 md:py-20">
            <div id="hero-grid" className="grid gap-10 md:grid-cols-2 items-center">
              <div id="hero-text">
                <p id="hero-subtitle" className="font-playfair inline-block text-sm font-semibold uppercase tracking-widest text-amber-600 mb-3">Fampahalalana ny lalàna ho an'ny rehetra</p>
                <h1 id="hero-title" className="font-playfair text-4xl sm:text-5xl font-extrabold leading-tight mb-5">Fantaro ny lalàna, amin'ny fomba tsotra sy haingana</h1>
                <p id="hero-description" className="font-lato text-slate-600 text-lg mb-7">Hevi-dehibe mazava, fikarohana moratonga, ary famintinana mifanaraka amin'ny rehetra. Zahao ny tontolon'ny lalàna nefa tsy mampiasa teny sarotra.</p>
                <div id="hero-statistics" className="flex flex-wrap gap-4">
                  <button onClick={() => set} id="stat-laws" className="px-4 py-2 rounded-xl bg-amber-900 text-white font-bold hover:shadow-lg hover:scale-105 transition-all duration-300">Zahao ireo lalàna </button>
                </div>
              </div>
              <div id="hero-image" className="rounded-2xl overflow-hidden shadow-xl">
                <img src={heroImage} alt="I-Lalana hero" className="w-full h-100 object-cover" />
              </div>
            </div>

            <div id="summary-cards" className="mt-14 grid gap-6 md:grid-cols-3">
              <article id="card-types" className="p-5 bg-white rounded-xl shadow-sm border hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                <h2 id="card-types-title" className="font-playfair text-xl font-bold mb-2">Ireo karazan-dalàna</h2>
                <p id="card-types-description" className="font-lato text-slate-600">Lalàmpanorenana, fehizoro, tsotra, ary fampiharana. Torolalana haingana hamantarana ny sokajy tsirairay.</p>
              </article>
              <article id="card-procedure" className="p-5 bg-white rounded-xl shadow-sm border hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                <h2 id="card-procedure-title" className="font-playfair text-xl font-bold mb-2">Ireo dingana arahina</h2>
                <p id="card-procedure-description" className="font-lato text-slate-600">Manomboka amin'ny latsabato ka hatramin'ny didy fampiharana: dingana, mpandray anjara, ary fe-potoana hazavaina tsotra miaraka amin'ny ohatra fohy.</p>
              </article>
              <article id="card-gravity" className="p-5 bg-white rounded-xl shadow-sm border hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                <h2 id="card-gravity-title" className="font-playfair text-xl font-bold mb-2">Ny lanjany sy ny fiantraikany</h2>
                <p id="card-gravity-description" className="font-lato text-slate-600">Ambany, antonony, ambony: hitao ny fomba ampihetsehan'ny lalàna ny fiainana andavanandro, ny toekarena, ary ny fiarahamonina.</p>
              </article>
            </div>
          </section>
        </main>

        <Footer />
      </>
    )
}

export default Home;
