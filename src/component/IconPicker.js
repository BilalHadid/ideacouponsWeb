import React from "react";
import IconPicker from "react-icon-picker";

const icons = [
  "fa fa-amazon",
  "fa fa-adn",
  "fa fa-androidroid",
  "fa fa-area-chart",
  "fa fa-file-picture-o",
  "fa fa-plus-square",
  "fa fa-genderless",
  "fa fa-intersex",
  "fa fa-hand-o-down",
  "fa fa-rocket",
  "fa fa-ambulance",
  "fa fa-heartbeat",
  "fa fa-hospital-o",
  "fa fa-rocket",
  "fa fa-plane",
  "fa fa-ship",
  "fa fa-taxi",
  "fa fa-address-book",
  "fa fa-adjust",
  "fa fa-bank",
  "fa fa-book",
  "fa fa-camera",
  "fa fa-gift",
  "fa fa-heart",
  "fa fa-align-center",
  "fa fa-align-justify",
  "fa fa-align-left",
];
const id = [
  "fa fa-amazon",
  "fa fa-adn",
  "fa fa-androidroid",
  "fa fa-area-chart",
  "fa fa-file-picture-o",
  "fa fa-plus-square",
  "fa fa-genderless",
  "fa fa-intersex",
  "fa fa-hand-o-down",
  "fa fa-rocket",
  "fa fa-ambulance",
  "fa fa-heartbeat",
  "fa fa-hospital-o",
  "fa fa-rocket",
  "fa fa-plane",
  "fa fa-ship",
  "fa fa-taxi",
  "fa fa-address-book",
  "fa fa-adjust",
  "fa fa-bank",
  "fa fa-book",
  "fa fa-camera",
  "fa fa-gift",
  "fa fa-heart",
  "fa fa-align-center",
  "fa fa-align-justify",
  "fa fa-align-left",
];

const IconPickers = (props) => {
  const [state, setState] = React.useState({
    id: "fa fa-camera",
    icon: "fa fa-camera",
  });

  return (
    <>
      {/* <span className={state.icon}></span> */}
      <span>{state.icon}</span>
      <IconPicker
        {...props}
        icons={icons}
        defaultValue="fa fa-camera"
        resource={state.icon}
        onChange={(icon) => {
          setState({
            ...state,
            id,
            icon,
          });
        }}
      />
    </>
  );
};
export default IconPickers;
