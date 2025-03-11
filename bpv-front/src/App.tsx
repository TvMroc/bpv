
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/pages/Home/Container";
import { useState } from "react";

function App() {
  const [test, setTest] = useState<number>(4);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home test={test} setTest={setTest}/>} />
          <Route path="test" element={<>test</>} />
          <Route path="*" element={<>Not found</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
