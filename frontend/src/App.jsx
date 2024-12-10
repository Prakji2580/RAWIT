import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import AddProductPage from "./Components/AddProductPage";

function AddProductsPage(vendorName,vendorAddress) {
  return <AddProductPage vendorName={vendorName} vendorAddress={vendorAddress} />
}

function HomePage(data) {
  return (
  <div className="Home">
    <h1>Start your work from here</h1>
    <p>NOTE: Create new components or files in Components folder.</p>
    <p>Don't Worry You can work on .js extension or .jsx whichever you feel like.</p>
    <p>{!data && "Server closed" }</p>
    <p>{data}</p>
  </div>
  )
}

function App() {

  const [data, setData] = useState("");

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/get_mails')
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
    })
    .then((data) => {
      setData(data.message)
    })
    .catch((err) => {console.log("ERROR OCCURED!")})
  }, [])

  return (
      <Router>
        <nav>
          <Link to="/">Home Page</Link>
          <Link to="/add-product">Add Product</Link>
        </nav>

        <Routes>
          <Route path="/add-product" element={AddProductsPage("Karniss and Sons Pvt. Ltd.","HongKong")} />
          <Route path="/" element={HomePage(data)} />
        </Routes>

      </Router>
  );
}

export default App;
