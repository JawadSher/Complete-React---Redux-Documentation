const ErrorMessg = ({ foodItems }) => {
  return <>{foodItems.length === 0 && <h3>Food Box is Empty !!!</h3>}</>;
};

export default ErrorMessg;
