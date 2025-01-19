import React from 'react';
import Forma from '../atoms/Forma';

const MoleculeExample = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Forma width="150px" height="50px" />
      <Forma width="150px" height="50px" />
    </div>
  );
};

export default MoleculeExample;
