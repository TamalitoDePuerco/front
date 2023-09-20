import taco from "../components/assets/taco.png";
import quesadilla from "../components/assets/quesadilla.png";
import tortilla from "../components/assets/tortilla.png";
import { useState } from "react";

function Login() {
  const [contrasenaVisible, setContrasenaVisible] = useState(false);

  function verContrasena() {
    setContrasenaVisible((prevState) => !prevState);
  }

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-[#FAF0E6]">
      <div className="w-7/12 p-14 m-28 bg-[#E6E6E6] rounded-3xl shadow-2xl lg:max-w-md">
        <h1 className="text-2xl font-semibold text-center ">Bienvenido</h1>
        <form action="" className="mt-8 w-full">
          <div className="mb-2">
            <input type="email" className="block w-full px-4 py-4 mt-2  bg-white border rounded-2xl"/>
          </div>
          <div className="mb-2">
            <input type="email" className="block w-full px-4 py-4 mt-8  bg-white border rounded-2xl"/>
          </div>
        </form>
      </div>
    </div>
  );
}

//<button type="button"
//className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
//onClick={verContrasena}
//>
//{contrasenaVisible ? (
//  <img src={tortilla} alt="Tortilla" height="20px" width="32px"/>
//) : (
//  <img src={quesadilla} alt="Quesadilla" height="20px" width="32px"/>
//)}
//</button>
export default Login;
