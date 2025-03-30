import React from "react";

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

const Sidebar = ({ setPath }) => {
  const handleClick = (item) => {
    console.log(item);
    setPath({
      path: item.TexturePath,
      type: item.type,
    });
  };

  return (
    <div className="w-[40%] h-screen  ">
      <div className="w-full h-20"></div>
      <div className=" mt-10 flex justify-evenly">
        {textureData.map((item, index) => {
          return (
            <>
              <img
                className=" w-40 border-amber-300 border-2  "
                src={textureData[index].imagePath}
                alt=""
                onClick={() => handleClick(item)}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
