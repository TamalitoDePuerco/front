import Sidebar from "../components/shared/Siderbar";
import Orden from "../components/shared/Orden";
import { HiPlus } from "react-icons/hi";
import { menuData, menuDataB } from "./menuData";
import "../App.css";

function Menu() {
  return (
    <div className="w-full min-h-screen flex">
      <div className="w-28">
        <Sidebar />
      </div>
      <div className="w-3/5 pt-7 pr-7 pb-7" id="Menu">
        <div className="h-full rounded-xl text-center flex flex-col items-center justify-center">
          <h1 className="p-4 font-bold text-2xl"> PLATILLOS </h1>
          <div className="grid grid-rows-2 grid-cols-3 gap-7 p-4 h-3/4 w-4/5">
            {menuData.map((val, key) => {
              return (
                <div
                  key={key}
                  className="bg-white text-center flex flex-col items-center justify-center p-4 dashed-border shadow-2xl"
                >
                  <h1 className="mb-2 font-bold p-2">{val.title}</h1>
                  <img
                    src={val.img}
                    className="max-w-full max-h-full pb-16 pt-16"
                    alt={val.title}
                  ></img>
                  <button type="button" className="p-2">
                    <HiPlus
                      size="26px"
                      color="#FFF"
                      className="bg-red-500 w-9 h-9 rounded-md"
                    />
                  </button>
                </div>
              );
            })}
          </div>
          <h1 className="font-bold text-2xl"> BEBIDAS </h1>
          <div className="grid grid-rows-2 grid-cols-3 gap-7 p-4 h-3/4 w-4/5">
            {menuDataB.map((val, key) => {
              return (
                <div
                  key={key}
                  className="bg-white text-center flex flex-col items-center justify-center p-4 dashed-border shadow-2xl"
                >
                  <h1 className="mb-2 font-bold p-2">{val.title}</h1>
                  <button type="button" className="p-2">
                    <HiPlus
                      size="26px"
                      color="#FFF"
                      className="bg-red-500 w-9 h-9 rounded-md"
                    />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-2/6 pt-7 pr-7 pb-7">
        <div className="bg-slate-300 h-full rounded-xl">
          <Orden />
        </div>
      </div>
    </div>
  );
}
export default Menu;
