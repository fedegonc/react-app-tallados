import React from 'react';
import Forma from '../atoms/Forma';
import MoleculeExample from '../molecules/MoleculeExample';

const OrganismExample = () => {
  return (
    <div style={{ display: 'flex', gap: '20px', justifyContent: 'space-between' }}>
      <MoleculeExample />
      <Forma width="300px" height="150px" />
    </div>
  );
};

export default OrganismExample;
