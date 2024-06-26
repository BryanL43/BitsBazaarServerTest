import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ThemeProvider} from './ThemeProvider';
import Homepage from "./pages/Homepage";
import Signin from "./pages/Signin";
import Register from "./pages/Register";
import Forgotpassword from "./pages/Forgotpassword";
import Notfoundpage from "./pages/Notfoundpage";

function App() {
  return (
    <ThemeProvider>
      <div className="App"> 
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Homepage/>} />
              <Route path="signin" element={<Signin />} />
              <Route path="register" element={<Register />} />
              <Route path="forgotpassword" element={<Forgotpassword />} />
              <Route path="*" element={<Notfoundpage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
