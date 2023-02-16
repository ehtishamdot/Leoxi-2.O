import Logo from "../assets/images/icon.png";

const LogoIcon = (props) => {
  return <img className={props.className} src={Logo} alt="Logo" />;
};

export default LogoIcon;
