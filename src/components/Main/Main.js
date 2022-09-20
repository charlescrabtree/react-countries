import React, { useState, useEffect } from 'react';
import './Main.css';
import FlagCard from '../FlagCard/FlagCard';
import { getFlags } from '../../services/flags';

export default function Main() {
  const [flags, setFlags] = useState([]);
  return (
    <div>
      {flags.map((flag) => {
        return <FlagCard key={flag.name} {...flag} />;
      })}
    </div>
  );
}
