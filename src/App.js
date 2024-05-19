import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn } from "./pages/signin";
import { SignUp } from "./pages/signup";
import { PagesContainerHeader } from "./pages/pages";
import { FileUpload } from "./Component/fileUpload/fileUpload";
import { useState } from "react";
function App() {
  const [isImageGallery, setImageGallery] = useState(false);
  return (
      <div className="App">
        <div className="main-container">
          { <FileUpload />}
          
        </div>
        </div>
      );
    }
    
    
    export default App;
    
    // <BrowserRouter>
    //   <Routes>
    //     <Route
    //       path="/"
    //       element={<SignIn setImageGallery={setImageGallery} />}
    //     />
    //     <Route path="/signUp" element={<SignUp />}/>
    //     <Route path="/image-gallery" element={<FileUpload />} />
    //   </Routes>
    // </BrowserRouter>
    // {!isImageGallery && <div className="right-container"></div>}