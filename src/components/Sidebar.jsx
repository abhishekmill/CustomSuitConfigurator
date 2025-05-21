import React from "react";
import { div } from "three/tsl";

const textureData = [
  {
    imagePath: "/view/1.jpg",
    TexturePath: "/texture/3799-22.jpg",
    name: "",
    type: "fabric",
  },
  {
    imagePath: "/view/2.jpg",
    TexturePath: "/texture/4748-3.jpg",
    name: "",
    type: "pattern",
  },
  {
    imagePath: "/view/3.jpg",
    TexturePath: "/texture/4855.jpg",
    name: "",
    type: "pattern",
  },
  {
    imagePath: "/view/4.jpg",
    TexturePath: "/texture/4702-1.jpg",
    name: "",
    type: "fabric",
  },
];

const ButtonData = [
  { imagePath: "/view/btns/2Button.png", name: "2button" },
  { imagePath: "/view/btns/4Button.png", name: "4button" },
  { imagePath: "/view/btns/6D3.png", name: "6button" },
];
const Sidebar = ({ setPath, setButtonType }) => {
  const handleClick = (item) => {
    console.log(item);
    setPath({
      path: item.TexturePath,
      type: item.type,
    });
  };

  const handleMenuClick = (item) => {
    console.log(item);
    setButtonType(item.name);
  };

  return (
    <div className="w-[40%] mt-[20%]  ">
      <div className="w-full flex flex-row xl:flex-col ">
        <Menues data={textureData} handleClick={handleClick} />
        <Menues data={ButtonData} handleClick={handleMenuClick} />
      </div>
    </div>
  );
};

const Menues = ({ data, handleClick }) => {
  return (
    <div className="  flex-col xl:flex-row flex justify-start">
      {data.map((item, index) => {
        return (
          <div className="flex justify-center flex-col items-center">
            <img
              key={index}
              className=" mt-5  mx-5 max-w-32 border-black  border"
              src={item.imagePath}
              alt=""
              onClick={() => handleClick(item)}
            />
            <div>{item.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
