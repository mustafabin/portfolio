import React from "react";
import { HashLink } from "react-router-hash-link";
import HomeIcon from "@mui/icons-material/Home";
import FolderIcon from "@mui/icons-material/Folder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArticleIcon from "@mui/icons-material/Article";
import WhiteBrandVideo from "../media/white-brand-video.mp4";
import DarkBrandVideo from "../media/dark-brand-video.mp4";
import FormControlLabel from "@mui/material/FormControlLabel";
import { toggleValue } from "../redux/mode.js";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import { useSelector, useDispatch } from "react-redux";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#d438ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      borderRadius: "100%",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: "#fe8802",
    borderRadius: 20 / 2,
  },
}));
export default function DefaultNav() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode.value);
  return (
    <>
      <div className="nav-brand-container">
        <video
          src={mode === "Light" ? WhiteBrandVideo : DarkBrandVideo}
          muted
          autoPlay
          className="nav-brand-video"
        ></video>
      </div>
      <div className="nav-link-container">
        <HashLink to="/">
          <HomeIcon fontSize="large"></HomeIcon>
        </HashLink>
        <HashLink to="/">
          <AccountCircleIcon fontSize="large"></AccountCircleIcon>
        </HashLink>
        <HashLink to="/">
          <FolderIcon fontSize="large"></FolderIcon>
        </HashLink>
        <HashLink
          to="/
resume"
        >
          <ArticleIcon fontSize="large"></ArticleIcon>
        </HashLink>
      </div>
      <div className="nav-mode-switch">
        <FormControlLabel
          onChange={() => dispatch(toggleValue())}
          control={
            <MaterialUISwitch
              sx={{ m: 1 }}
              checked={mode === "Light" ? true : false}
            />
          }
        />
      </div>
    </>
  );
}
