import { PublicLayout } from "./layouts/PublicLayout";
import { PrivateLayout } from "./layouts/PrivateLayout";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/global.css'
import './styles/variables.css'
import { Login } from "./components/user/auth/login/pages/Login/Login";
import { Register } from "./components/user/auth/register/pages/Register/Register";

function App() {
  return (


    <>

      <BrowserRouter>
        <Routes>

          <Route element={<PublicLayout />}>

            <Route path="/login" element={<Login />}></Route>

            <Route path="/register" element={<Register/>}></Route>

          </Route>



          <Route element={<PrivateLayout/>}></Route>

        </Routes>

      </BrowserRouter>

    </>


  );
}

export default App;
