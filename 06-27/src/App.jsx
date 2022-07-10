import React from 'react';
import './App.css';
import mainContext from './context/mainContext';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/NavBar';
import RegisterPage from './pages/RegisterPage';
import {LoginPage} from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import ReservationsPage from './pages/ReservationsPage';



function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
          <Route path='/reservations' element={<ReservationsPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;











// // when fighting you can check inventory
// // after each fight you can choose to leave ot fight one more monster
// // make toolbar with inventory icon, so it would be possible to open inventory and equip items or drink potions any time

// // you should have at least 4 pages
// // start game page - page where player choose his character
// // main page - where payer info is shown, his gold, stats, inventory, equipment and buttons to navigate to shop and arena
// // trader page - page where player can buy and sell stuff
// // arena - page where player fight monsters

// // START GAME PAGE
// // when game start player should be able to choose his character (info and image should be displayed)
// // characters array has objects with characters
// // shw only these stats: gold, damage, race, image

// // MAIN PAGE
// // in this page payer can see his gold, inventory, and can navigate to shop ir arena

// // TRADER PAGE
// // Trader sells weapons and potions
// // trader sell weapons and potions, also trader will buy items from player for gold (item monsters drop).
// // trader buys items for half the price if player want to sell for weapon he bought of potion
// // in this page trader component and player inventory is visible

// // ARENA PAGE
// // arena is place where player fights monsters
// // while fighting monster player should be able to drink potion any time
// // each monster drops item after he was killed
// // monster damage is from 0 to his max damage, on every hit to player
// // player should not be able to leave arena when he is fighting the monster, only when fight is done
// // in arena player and monster hp should be displayed in progress bars

// // player will have these STATS
// // health - could be upgraded with weapons - could be restored with potions
// // damage - could be upgraded with weapons

// // WHAT STATS DO
// // health - if health gets to 0 player dies, game over, health is decreasing when player takes damage from enemy
// // damage - determines initial player damage, if player damage stat is 3 and weapon max damage is 5, player will do 3 damage for sure and 0-5 random weapon damage

// // dropItems is array of items which enemies drop after death
// // items has price, it determines how much gold trader would give for the item

