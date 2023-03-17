const StepSection = () => {
  const [steps, setSteps] = useState([]);
  const addStep = () => {
    const newStep = {
      stepNumber: steps[-1].stepNumber + 1,
      stepContent: "",
      saved: false,
    };
    return;
  };

  return <>{steps.map((step) => {})}</>;
};

export default StepSection;
