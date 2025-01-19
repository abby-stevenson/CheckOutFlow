import React, { useState } from 'react';

import Complete from './screens/complete';
import Payment from './screens/payment';
import AddToCart from './screens/addToCart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {

    return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<AddToCart />} />
            <Route path="/complete" element={<Complete />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </div>
      </Router>
    );
}
