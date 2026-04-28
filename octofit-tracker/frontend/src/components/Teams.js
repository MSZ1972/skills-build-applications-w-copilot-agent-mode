import React, { useEffect, useState } from 'react';

const TEAMS_API = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    console.log('Fetching Teams from:', TEAMS_API);
    fetch(TEAMS_API)
      .then(res => res.json())
      .then(data => {
        const items = data.results || data;
        setTeams(items);
        console.log('Fetched Teams:', items);
      })
      .catch(err => console.error('Error fetching teams:', err));
  }, []);

  return (
    <div className="card shadow p-4 mb-4">
      <h2 className="card-title mb-4 text-primary">Teams</h2>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Members</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, idx) => (
              <tr key={team.id || idx}>
                <td>{team.id || idx + 1}</td>
                <td>{team.name || '-'}</td>
                <td>{Array.isArray(team.members) ? team.members.join(', ') : team.members || '-'}</td>
                <td>{team.description || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Teams;
