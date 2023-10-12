import Sidebar from "../components/shared/Siderbar";
import Orden from "../components/shared/Orden";
import { menuData } from "./menuData";

function Menu() {
  return (
    <div className="w-full min-h-screen flex">
      <div className="w-28">
        <Sidebar />
      </div>
      <div className="w-3/5 pt-7 pr-7 pb-7 ">
        <div className="bg-slate-300 h-full rounded-xl">
          <h1 className="p-4"> PLATILLOS </h1>
          <div className="grid grid-rows-2 grid-cols-2 gap-4 p-4">
            {menuData.map((val, key) => {
              return (
                <div
                  key={key}
                  className="bg-white text-center flex flex-col items-center justify-center p-4"
                >
                  <h1 className="mb-2">{val.title}</h1>
                  <img
                    src={val.img}
                    className="max-w-full max-h-full pb-4"
                    alt={val.title}
                  ></img>
                  <button type="button" className="bg-red-500 p-2">Añadir</button>
                </div>
              );
            })}
          </div>
          <h1> BEBIDAS </h1>
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
