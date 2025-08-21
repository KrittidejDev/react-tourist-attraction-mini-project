import React from "react";
import { IconsLinks } from "../../Icons/IconsLinks";
import { ToastContainer, toast } from "react-toastify";

export const TravelCard = ({ data, onClickTag }) => {
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
    toast("Coppy To Clipboard!");
  };

  return (
    <div className="card_wrap flex gap-x-5  relative">
      <div className="w-[35%] h-[250px] max-h-max rounded-3xl overflow-hidden ">
        <img
          src={data && data.photos[0]}
          alt="card image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="row-right flex-1 box-border p-5">
        <h3 className="text-xl font-bold mb-2.5">{data && data.title}</h3>
        <p className="line-clamp-1 text-gray-500 text-xs ">
          {data && data.description}
        </p>
        <a
          href={data && data.url}
          className="text-xs underline text-blue-500 mb-3"
        >
          อ่านต่อ
        </a>
        <div className="flex gap-x-3 text-gray-500 mb-2.5">
          <span>หมวด</span>
          {data &&
            data.tags.map((e, i) => (
              <div
                key={i}
                className="flex text-gray-500 "
                onClick={() => onClickTag(e)}
              >
                {i === data.tags.length - 1 && <div className="mr-3">และ</div>}
                <div
                  className="underline cursor-pointer "
                  onClick={() => onClickTag(e)}
                >
                  {e}
                </div>
              </div>
            ))}
        </div>
        <div className="flex gap-x-2.5 ">
          {data &&
            data.photos.slice(1).map((e, i) => (
              <div
                key={i}
                className=" w-[100px] h-[100px] rounded-3xl overflow-hidden"
              >
                <img
                  src={e}
                  alt="card image"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
        </div>
      </div>
      <div className="absolute bottom-5 right-10">
        <div onClick={() => copyToClipboard(data?.url)}>
          <IconsLinks width="36" height="36" />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
