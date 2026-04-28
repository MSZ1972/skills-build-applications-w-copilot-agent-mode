import React, { useEffect, useState } from 'react';

const LEADERBOARD_API = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    console.log('Fetching Leaderboard from:', LEADERBOARD_API);
    fetch(LEADERBOARD_API)
      .then(res => res.json())
      .then(data => {
        const items = data.results || data;
        setLeaderboard(items);
        console.log('Fetched Leaderboard:', items);
      })
      .catch(err => console.error('Error fetching leaderboard:', err));
  }, []);

  return (
    <div className="card shadow p-4 mb-4">
      <h2 className="card-title mb-4 text-primary">Leaderboard</h2>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Score</th>
              <th>Team</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((entry, idx) => (
              <tr key={entry.id || idx}>
                <td>{entry.id || idx + 1}</td>
                <td>{entry.user || '-'}</td>
                <td>{entry.score || '-'}</td>
                <td>{entry.team || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;
