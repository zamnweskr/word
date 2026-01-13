// import React, { useState } from 'react';
// import  { LETTERS } from  "../shared/LETTERS.js";


// export default function Grid() {
//   const [firstSelected, setFirstSelected] = useState(null);
//   const [secondSelected, setSecondSelected] = useState(null);
  
//   // Randomly select 16 items from LETTERS array
//   const [items, setItems] = useState(() => {
//     const shuffled = [...LETTERS].sort(() => Math.random() - 0.5);
//     return shuffled.slice(0, 16);
//   });

//   const handleClick = (index) => {
//     if (firstSelected === null) {
//       // First click
//       setFirstSelected(index);
//     } else if (firstSelected === index) {
//       // Clicked the same item, deselect
//       setFirstSelected(null);
//     } else {
//       // Second click - swap the items
//       setSecondSelected(index);
      
//       const newItems = [...items];

//       const temp = newItems[firstSelected];

//       newItems[firstSelected] = newItems[index];

//       newItems[index] = temp;
      
//       setItems(newItems);
      
//       // Reset selections after a brief delay to show the swap
//       setTimeout(() => {
//         setFirstSelected(null);
//         setSecondSelected(null);
//       }, 250);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
//           WORD?!
//         </h1>
        
//         <div className="grid grid-cols-4 gap-4 mb-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
//           {items.map((item, index) => (
//             <div
//               key={item.id}
//               onClick={() => handleClick(index)}
//               style={{
//                 backgroundColor: firstSelected === index ? '#DBEAFE' : secondSelected === index ? '#D1FAE5' : 'white'
//               }}
//               className={`
//                 cursor-pointer rounded-lg overflow-hidden shadow-lg 
//                 transition-all duration-200 hover:scale-105 hover:shadow-xl
//                 ${firstSelected === index ? 'ring-4 ring-blue-500' : ''}
//                 ${secondSelected === index ? 'ring-4 ring-green-500' : ''}
//               `}
//             >
//               <img 
//                 src={item.src} 
//                 alt={item.name}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>

//         <div className="bg-white rounded-lg shadow-lg p-6 text-center">
//           <p className="text-gray-700">
//             {firstSelected === null 
//               ? 'Click on a card to select it' 
//               : 'Click on another card to swap'}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }