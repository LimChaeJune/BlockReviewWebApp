import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login/Login';
import Register from './components/login/Register';
import WriteReview from "./components/review/WriteReview";
import DetailReview from "./components/review/Detail";
import My from "./components/user/My";
import AddStore from "./components/stores/AddStore";


function App() {
  return (

    <div className='App'>
          <div className='block-review-banner'>
                BLOCK REVIEWS
            </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="/store" element={<AddStore/>}/>
        <Route path="/my/:userId" element={<My />} />
        <Route path="/review/write" element={<WriteReview />} />
        <Route path="/review/:reviewId" element={<Register />} />
      </Routes>

    </div>

  );
}
export default App;
