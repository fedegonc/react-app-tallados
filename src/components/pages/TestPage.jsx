 import React from 'react';
 import CardGrid from '../organisms/CardGrid';

 const TestPage = () => {
   // Datos de prueba para las tarjetas
   const testCards = [
     { imageSrc: 'https://via.placeholder.com/200x300', title: 'Card 1', description: 'Test description 1' },
     { imageSrc: 'https://via.placeholder.com/200x300', title: 'Card 2', description: 'Test description 2' },
     { imageSrc: 'https://via.placeholder.com/200x300', title: 'Card 3', description: 'Test description 3' },
     { imageSrc: 'https://via.placeholder.com/200x300', title: 'Card 4', description: 'Test description 4' },
     { imageSrc: 'https://via.placeholder.com/200x300', title: 'Card 5', description: 'Test description 5' },
     { imageSrc: 'https://via.placeholder.com/200x300', title: 'Card 6', description: 'Test description 6' },
   ];

   return (
     <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
       <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Test Page for CardGrid</h1>
       <CardGrid cards={testCards} />
     </div>
   );
 };

 export default TestPage;
