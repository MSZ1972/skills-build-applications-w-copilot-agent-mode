import React, { useEffect, useState } from 'react';

const WORKOUTS_API = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    console.log('Fetching Workouts from:', WORKOUTS_API);
    fetch(WORKOUTS_API)
      .then(res => res.json())
      .then(data => {
        const items = data.results || data;
        setWorkouts(items);
        console.log('Fetched Workouts:', items);
      })
      .catch(err => console.error('Error fetching workouts:', err));
  }, []);

  return (
    <div className="card shadow p-4 mb-4">
      <h2 className="card-title mb-4 text-primary">Workouts</h2>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Type</th>
              <th>Duration</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map((workout, idx) => (
              <tr key={workout.id || idx}>
                <td>{workout.id || idx + 1}</td>
                <td>{workout.name || '-'}</td>
                <td>{workout.type || '-'}</td>
                <td>{workout.duration || '-'}</td>
                <td>{workout.date || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Workouts;
