import PlusIcon from "../assets/icons/Plus.svg";
import TargetIcon from "../assets/icons/Target.svg";
import FlameIcon from "../assets/icons/Flame.svg";
import CheckCircleIcon from "../assets/icons/CheckCircle.svg";
import TrendingUpIcon from "../assets/icons/TrendingUp.svg";
import ClockIcon from "../assets/icons/Clock.svg";
import FilterIcon from "../assets/icons/Filter.svg";

import StatCard from "../components/StatCard";

import "./Dashboard.css";

export default function Dashboard() {
  return (
    <main className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p>Your personalized LeetCode journey overview</p>
        </div>

        <button className="add-btn">
          <img src={PlusIcon} alt="plus" className="dashboard-icon" />
          Add Problem
        </button>
      </div>

      <section>
        <h2 className="section-title">Today's Goals</h2>

        <div className="goal-card">
          <div>
            <h3>Daily Practice Goal</h3>
            <p>Daily Goal</p>
          </div>

          <img src={TargetIcon} alt="target" className="goal-icon" />

          <div className="progress-row">
            <span>Progress</span>
            <strong>0 / 2</strong>
          </div>

          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
        </div>
      </section>

      <section className="stats-grid">
        <StatCard
          icon={FlameIcon}
          alt="flame"
          title="Streak"
          value="0 days"
          colorClass="red"
        />

        <StatCard
          icon={CheckCircleIcon}
          alt="check"
          title="Today"
          value="0"
          colorClass="green"
        />

        <StatCard
          icon={TrendingUpIcon}
          alt="trending"
          title="Total Solved"
          value="0"
          colorClass="blue"
        />

        <StatCard
          icon={ClockIcon}
          alt="clock"
          title="In Progress"
          value="0"
          colorClass="orange"
        />
      </section>

      <section className="filter-card">
        <div className="filter-left">
          <img src={FilterIcon} alt="filter" className="filter-icon" />

          <select>
            <option>All Difficulties</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>

          <select>
            <option>All Status</option>
            <option>Solved</option>
            <option>In Progress</option>
            <option>Need Review</option>
          </select>
        </div>

        <p>Showing 0 of 0 problems</p>
      </section>
    </main>
  );
}