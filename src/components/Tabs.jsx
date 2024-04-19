export default function Tabs({ children, buttons, ButtonsContainer = 'menu'}) {
    // const ButtonContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
  // or 

//   export default function Tabs({ children, buttons}) {
//     // const ButtonContainer = buttonsContainer;
//   return (
//     <>
//       <menu>{buttons}</menu>
//       {children}
//     </>
//   );

// }
