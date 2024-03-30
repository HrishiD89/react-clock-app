import CLockIcon from "./assets/clock.svg";

export default function Logo() {
  return (
    <div className="logo-nav">
      <img src={CLockIcon} alt="clock-icon" />
      <p>MyClock</p>
    </div>
  );
}
