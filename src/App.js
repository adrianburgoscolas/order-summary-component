import "./App.css";
import illustration from "./images/illustration-hero.svg";
import planlogo from "./images/icon-music.svg"

function App() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen App">
        <div id='card' className="overflow-hidden rounded-3xl">

          <img className='rounded-none' src={illustration} alt="Audio content." />

          <div id='car-content' className="flex flex-col p-12">
            <div className='text-3xl font-bold text-center' id="header-text">Order Summary</div>
            <div id='content-text' className='p-5 font-bold text-center'>
              You can now listen to millions of songs, audiobooks, and podcasts on
              any device anywhere you like!
            </div>
            <div id='plan' className='flex p-7 rounded-xl'>
              <img id='logo' src={planlogo} alt='Plan logo'/>
              <div id='plan-text' className='px-5'>
                <div id='plan-header' className='font-extrabold'>Annual Plan</div>
                <div id='plan-price' className='font-bold'>$59.99/year</div>
              </div>
              <div id='plan-change' className='self-center flex-auto font-bold text-right underline transition-all'><a href='#'>Change</a></div>
            </div>
            <button id='payment' className='block p-3.5 my-7 rounded-xl font-bold transition-all'>Proceed to Payment</button>

            <button id='cancel' className='block font-extrabold transition-all'>Cancel Order</button>
          </div>

          
          
        </div>
        <footer className='absolute bottom-16' id='app-footer'>
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
  );
}

export default App;
