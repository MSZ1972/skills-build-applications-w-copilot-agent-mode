

import octofitLogo from '../public/octofitapp-small.png';


function App() {
  return (
    <div className="container mt-4">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded mb-4">
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img src={octofitLogo} alt="Octofit Logo" className="octofit-logo me-2" />
          <span className="fw-bold text-white">Octofit Tracker</span>
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/activities">Activities</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/leaderboard">Leaderboard</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/teams">Teams</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/users">Users</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/workouts">Workouts</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/users" element={<Users />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/" element={
          <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '60vh' }}>
            <div className="card shadow p-4 w-100" style={{ maxWidth: 500 }}>
              <h1 className="display-5 mb-3 text-primary">Welcome to Octofit Tracker!</h1>
              <p className="lead">Track your fitness, join teams, and compete on the leaderboard.</p>
              <NavLink to="/activities" className="btn btn-primary btn-lg mt-3">Get Started</NavLink>
            </div>
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;
