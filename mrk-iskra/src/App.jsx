import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="container flex items-center w-full bg-gradient-to-r from-plava via-blue-800 to-plava h-32 mt-1">
        <img
          className="ml-36 w-36 h-36"
          src="images/logowb.png"
          alt="main-logo"
        />
        <div className="flex list-none uppercase space-x-10 text-xl ml-36 font-Kanit text-footer">
          <li className="flex items-center w-36 h">
            <i className=" ml-5 w-16 items-center fa-solid fa-house"></i>
            <a href="#">Počenta</a>
          </li>
          <li className="flex items-center w-24 ">
            <i class="w-12 fa-solid fa-people-group"></i>
            <a href="#">Igrači</a>
          </li>
          <li className="flex items-center w-28 ">
            <i class="fa-solid fa-ticket"></i>
            <a href="#">Ulaznice</a>
          </li>
          <li className="flex items-center w-36">
            <i class="fa-solid fa-circle-info"></i>
            <a href="#">Informacije</a>
          </li>
          <li className="flex items-center w-36">
            <i class="w-9 fa-solid fa-address-book"></i>
            <a href="#">Kontakt</a>
          </li>
        </div>
      </div>
      <div className=" h-1 ml-32 w-5/6 bg-blue-700"></div>
      <div className="w-5/6 h-56 ml-32 rounded-xl bg-hero bg-center ">
        <div>
          <h1 class="ml-14 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white mt-10">
            Postani aktivni clan{" "}
            <span class="text-blue-600 dark:text-blue-500">
              MRK ISKRA Bugojno
            </span>
          </h1>
          <div className="flex space-x-20">
            <a
              href="./src/assets/form.jsx"
              type="button"
              class="w-2/4 h-20 ml-80 mt-10 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-2xl px-5 py-2.5 text-center mr-2 mb-2 "
            >
              <h1 className="mt-3">Učlani se ovdje !</h1>
            </a>

            <img className="w-32 justify-end" src="./Images/clanska.png" />
          </div>
        </div>
      </div>
      <div className="flex h-96 mt-1">
        <div className="w-2/6 ml-32 bg-proud bg-center bg-contain rounded-xl "></div>
        <div className="w-3/6 ml-1 bg-gradient-to-r from-plava via-blue-800 to-plava h-48 rounded-xl">
          <h5 className="text-center text-xl text-white font-Kanit bg-plava rounded-xl">
            Premijer liga BiH (19. kolo)<span>15.01.2023</span>
          </h5>
          <div className="flex justify-center space-x-4">
            <img className="w-36" src="./Images/logowb.png" />
            <h3 className="text-white text-3xl text-center w-10 h-10 mt-12">
              vs
            </h3>
            <img className="w-36" src="./Images/rk-sloboda-grb200cc.png" />
          </div>
          <div className="w-full mt-6 bg-gradient-to-r from-plava via-blue-800 to-plava h-48 rounded-xl">
            <h1 className="text-white text-xl bg-plava text-center rounded-xl font-Kanit">
              Mobilna aplikacija
            </h1>
            <div className="flex ">
              <div className="text-white text-xl m-2 font-Kanit">
                <p>Preuzmi zvaničnu Android i iOS aplikaciju</p>
                <img
                  className="w-44"
                  src="https://www.logo.wine/a/logo/Google_Play/Google_Play-Badge-Logo.wine.svg"
                />
              </div>
              <div className="w-44 mr-32 mt-2">
                <img src="./Images/app.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-2"></div>
      <div class="relative overflow-x-auto shadow-mdl">
        <table class="w-5/6 ml-32 text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th
                scope="col"
                class="px-6 py-3 bg-gradient-to-r from-plava via-blue-800 to-plava"
              >
                Pozicija
              </th>
              <th scope="col" class="px-6 py-3 bg-plava">
                Gol-razlika
              </th>
              <th scope="col" class="px-6 py-3 bg-plava">
                Bodovi
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                <div className="flex space-x-2">
                  <h1>1.</h1>
                  <img className="w-7" src="./Images/izvidac.png" />
                  <h1>RK Izviđac (Ljubuški))</h1>
                </div>
              </th>
              <td class="px-6 py-4 bg-plava">428:413</td>
              <td class="px-6 py-4 bg-plava text-center">17</td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-blue-800"
              >
                <div className="flex space-x-2">
                  <h1>2.</h1>
                  <img className="w-9" src="./Images/logowb.png" />
                  <h1 className="mt-2">MRK Iskra(Bugojno)</h1>
                </div>
              </th>
              <td class="px-6 py-4 dark:bg-plava">465:440</td>
              <td class="px-6 py-4 bg-plava text-center">15</td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                <div className="flex space-x-2">
                  <h1>3.</h1>
                  <img className="w-7" src="./Images/borac.png" />
                  <h1>RK Borac (Banja Luka)</h1>
                </div>
              </th>
              <td class="px-6 py-4 bg-plava">433:420</td>
              <td class="px-6 py-4 bg-plava text-center">14</td>
            </tr>
            <tr>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                <div className="flex space-x-2">
                  <h1>4.</h1>
                  <img className="w-8" src="./Images/rk-sloboda-grb200cc.png" />
                  <h1>RK Sloboda (Tuzla)</h1>
                </div>
              </th>
              <td class="px-6 py-4 bg-plava">462:472</td>
              <td class="px-6 py-4 bg-plava text-center">13</td>
            </tr>
          </tbody>
        </table>
        <form className="flex w-5/6 ml-32 h-96 mt-2">
          <div className="h-96 w-1/2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 font-extrabold rounded-xl ml-72">
            <h1 className="text-center text-3xl font-Kanit text-cyan-50 ">
              Registracijska forma
            </h1>

            <div class="mb-6">
                <label for="email" class=" ml-1 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="email" id="email" class="ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ime@gmail.com" required/>
            </div> 
            <div class="mb-6">
                <label for="name" class="ml-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ime i Prezime</label>
                <input type="name" id="name" class="ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Anes" required/>
            </div> 
            <div class="mb-6">
                <label for="password" class="ml-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" id="name" class="ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="*********" required/>
            </div> 
            <a
              href="./src/assets/form.jsx"
              type="button"
              class="w-2/4 h-14 ml-8 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-2xl px-5 py-2.5 text-center mr-2 mb-2 "
            >
              <h1>Učlani se ovdje !</h1>
            </a>

          </div>
        </form>
      </div>
      <footer className="h-48 bg-footer mt-2">
        <h1 className="text-plava text-center font-Kanit font-bold">
          Generalni sponzori
        </h1>
        <div className="flex w-4/6 h-40 ml-60">
          <img className="p-4" src="./Images/logo2.png" />
          <img className="p-4" src="./Images/logo3.png" />
          <img className="p-10" src="./Images/logo4.png" />
          <img className="p-10" src="./Images/logo1.png" />
        </div>
      </footer>
    </div>
  );
}

export default App;
