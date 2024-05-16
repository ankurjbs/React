export default function Tab({ children, buttons ,buttonsContainer }) {
    // if I am using buttonsContainer (fisrt charecter is small) as a props react will understand it built in element and give error. So we have to set buttonsContainer variable ButtonsContainer (constant) . So that react jsx component reads eaisly and replace the value. or 2nd use prpos as upper cas charecter like ButtonsContainer (before buttonsContainer)
    const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
