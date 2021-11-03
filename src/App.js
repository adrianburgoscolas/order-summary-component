import "./App.css";
import illustration from "./images/illustration-hero.svg";
import planlogo from "./images/icon-music.svg"

function App() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen overflow-scroll App">
        <div id='card' className="overflow-hidden rounded-3xl">

          <img className='rounded-none' src={illustration} alt="Audio content." />

          <main id='card-content' className="flex flex-col p-6 md:p-12">
            <header className='p-2 font-extrabold text-center md:p-0 md:text-3xl' id="header-text"><h1>Order Summary</h1></header>
            <p id='content-text' className='p-2 text-center md:p-5 md:font-bold '>
              You can now listen to millions of songs, audiobooks, and podcasts on
              any device anywhere you like!
            </p>
            <section id='plan' className='flex p-4 my-5 md:my-0 md:p-7 rounded-xl'>
              <img id='logo' src={planlogo} alt='Plan logo'/>
              <div id='plan-text' className='px-5'>
                <div id='plan-header' className='text-sm font-extrabold md:text-base'>Annual Plan</div>
                <div id='plan-price' className='font-bold '>$59.99/year</div>
              </div>
              <div id='plan-change' className='self-center flex-auto font-bold text-right underline transition-colors'><a href='#plan-change'>Change</a></div>
            </section>
            <button id='payment' className='block p-3 md:p-3.5 my-2 md:my-7 rounded-xl font-bold transition-colors'>Proceed to Payment</button>

            <button id='cancel' className='block mt-4 font-extrabold transition-colors md:mt-0'>Cancel Order</button>
          </main><br />

          <footer className='absolute pl-2 m-auto text-xs md:pl-5 md:text-base' id='app-footer'>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://www.freecodecamp.org/fcce3ec214d-b0f9-4ddc-b526-34aea3d1e4a3"
            target="_blank"
            rel="noreferrer"
          >
            Adrian Burgos
          </a>
          .
        </footer>
          
        </div>
        
      </div>
    </div>  
  );
}

export default App;
