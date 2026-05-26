import DashboardIcon from "../assets/icons/LayoutDashboard.svg";
import TargetIcon from "../assets/icons/Target.svg";
import CalendarIcon from "../assets/icons/Calendar.svg";
import TrendingUpIcon from "../assets/icons/TrendingUp.svg";
import ListChecksIcon from "../assets/icons/ListChecks.svg";
import SettingsIcon from "../assets/icons/Settings.svg";
import FlameIcon from "../assets/icons/Flame.svg";

import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div>
        <div className="sidebar-header">
          <h2>LeetCode Tracker</h2>
          <p>Track your progress</p>
        </div>

        <nav className="sidebar-nav">
          <a className="nav-link active" href="#">
            <img
              src={DashboardIcon}
              alt="dashboard"
              className="nav-icon"
            />
            Dashboard
          </a>

          <a className="nav-link" href="#">
            <img
              src={TargetIcon}
              alt="target"
              className="nav-icon"
            />
            Goals & Targets
          </a>

          <a className="nav-link" href="#">
            <img
              src={CalendarIcon}
              alt="calendar"
              className="nav-icon"
            />
            Schedule
          </a>

          <a className="nav-link" href="#">
            <img
              src={TrendingUpIcon}
              alt="progress"
              className="nav-icon"
            />
            Progress
          </a>

          <a className="nav-link" href="#">
            <img
              src={ListChecksIcon}
              alt="problems"
              className="nav-icon"
            />
            All Problems
          </a>

          <a className="nav-link" href="#">
            <img
              src={SettingsIcon}
              alt="settings"
              className="nav-icon"
            />
            Settings
          </a>
        </nav>
      </div>

      <div className="today-card">
        <div className="today-title">
          <strong>Today's Progress</strong>

          <img
            src={FlameIcon}
            alt="flame"
            className="flame-icon"
          />
        </div>

        <div className="today-row">
          <span>Solved Today</span>
          <strong className="green">0</strong>
        </div>

        <div className="today-row">
          <span>Current Streak</span>
          <strong className="red">0 days</strong>
        </div>

        <div className="today-row">
          <span>Total Solved</span>
          <strong className="blue">0</strong>
        </div>
      </div>
    </aside>
  );
}