import './App.css';

function App() {
  const name = 'Pedro Esteban';

  return (
    <div className="App">
      <ComponentExample/>
      <h2>Name: {name}</h2>
      <ComponentWithProps name="Andres"/>
      <ComponentJob salary={90000} position="Senior SDE" company="Amazon"/>
      <ComponentJob salary={12000} position="Junior SDE" company="Google"/>
      <ComponentJob salary={10000} position="Project Manager" company="Netflix"/>
    </div>
  );
}

const ComponentExample = ()=>{
  return (
    <h1>ComponentExample</h1>
  );
}

const ComponentWithProps = (props)=>{
  return (
    <h3>{props.name}</h3>
  );
}

//Example of destructuring
const ComponentJob = ({company,position,salary})=>{
  return (
    <div>
      <h4>Company: {company}</h4>
      <h5>Position: {position}</h5>
      <h6>Salary: {salary}</h6>
    </div>
  );
}

export default App;
