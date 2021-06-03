import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleDreamCard from '../components/SingleDreamCard';
import { getSingleDream } from '../helpers/data/DreamData';

export default function SingleDream() {
  const [dream, setDream] = useState({});
  const { firebaseKey } = useParams();

  useEffect(() => {
    getSingleDream(firebaseKey)
      .then(setDream);
  }, []);

  return (
    <div>
      <SingleDreamCard dream={dream}>
        <h2>{dream.name}</h2>
        <h3>{dream.teacher}</h3>
        <h3>{dream.grade}</h3>
      </SingleDreamCard>
    </div>
  );
}
