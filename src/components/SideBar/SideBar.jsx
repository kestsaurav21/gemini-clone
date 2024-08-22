// import './sidebar.css';
import { useState } from "react";
import { assets } from "../../assets/assets";

const SideBar = () => {
  const [extended, setExtended] = useState(false);

  return (
    <div className="min-h-screen inline-flex p-6 justify-between flex-col bg-slate-100 ">
      <div className="flex-col">
        <img
          onClick={
            () => setExtended(prev => !prev)
          }
          className="w-10 block ml-2.5 cursor-pointer "
          src={assets.menu_icon}
          alt=""
        />
        <div className="mt-12 rounded-full inline-flex items-center bg-slate-200 gap-2.5 pl-4 pr-4 pt-2.5 pb-2.5 grey font-bold cursor-pointer">
          <img className=" w-10 cursor-pointer" src={assets.plus_icon} />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="p-6 flex flex-col">
            <p className=" mb-5 mt-5 text-start font-extrabold">Recent</p>
            <div className="flex flex-row align-bottom ">
              <img className="w-10 mb-5" src={assets.message_icon} />
              <p className="font-semibold hover:bg-slate-300 pt-2 ">
                What is react ...
              </p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="flex-col">
        <div className="flex flex-row  cursor-pointer p-4 hover:bg-white rounded-full">
          <img className="w-10" src={assets.question_icon} />
          {extended ? <p className="p-2">Help</p> : null }
        </div>
        <div className="flex flex-row cursor-pointer p-4 hover:bg-white rounded-full">
          <img className="w-10" src={assets.history_icon} />
          {extended ? <p className="p-2">Activity</p> : null}
        </div>
        <div className="flex flex-row cursor-pointer p-4 hover:bg-white rounded-full">
          <img className="w-10" src={assets.setting_icon} />
          {extended ? <p className="p-2">Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
