import { useState } from "react";
import CoinTracker from "./CoinTracker";
import ToDoList from "./ToDoList";
import Home from "./routes/Home";
const PageSwitch = () => {
    const [selectBtn, setSelectBtn] = useState("CoinTracker");
    const [btn, setBtn] = useState(<Home />);
    const convertBtn = (event) => {
      setSelectBtn(() => {
        switchBtn(event.target.value);
        return event.target.value;
      });
      
    };
    const switchBtn = (key) => {
      if (key === "ToDoList") {
        setBtn(<ToDoList />);
      } else if (key === "CoinTracker") {
        setBtn(<CoinTracker />);
      }
      else if (key === "MovieApp") {
        setBtn(<Home />);
      }
    };
    return (
        <div>
          <h1>Now : {selectBtn}</h1>
          <ul>
            <li>
              <button onClick={convertBtn} value="ToDoList">
                "ToDoList"
              </button>
            </li>
            <li>
              <button onClick={convertBtn} value="CoinTracker">
                "CoinTracker"
              </button>
            </li>
            <li>
              <button onClick={convertBtn} value="MovieApp">
                "MovieApp"
              </button>
            </li>
          </ul>
          {btn}
        </div>
      );
};

export default PageSwitch;