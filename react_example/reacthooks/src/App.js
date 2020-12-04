//const { default: HelloClass } = require("./component/helloclass");
import HelloClass from "./component/helloclass";
import HelloHookComponent from "./component/hellohook";
import HelloRest from "./component/hellorest";


function App() {
  return (
    <div className="App">
      <h1>React Hooks</h1>
      <HelloClass></HelloClass>
      <hr></hr>
      <HelloHookComponent></HelloHookComponent>
      <hr></hr>
      <HelloRest></HelloRest>
    </div>
  );
}

export default App;
