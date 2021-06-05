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
    <div className="single-card-view">
      <SingleDreamCard dream={dream}>
      </SingleDreamCard>
    </div>
  );
}
