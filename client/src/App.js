import './App.css';
import Graph from './components/Graph';
import Form from './components/Form';
import Linefunc from './components/LineChart';
import List from './components/List';
import Card from './components/card';
import LineGraph from './components/LineGraph';
import Labels from './components/Labels';

function App() {
  return (
    <div className="App">
      <div className='container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800'>
        <h1 className='text-4xl py-8 mb-10 bg-slate-800 text-white rounded'>Budgeting</h1>
        <Card></Card>
        <br></br>

        {/* Grid columns */}
        <div className='grid md:grid-cols-2 gap-4'>
          {/* Charts */}
          
          {/* <Linefunc></Linefunc> */}
          {/* Form */}
          <Form></Form>
          <LineGraph></LineGraph>
          <div>
          <Graph></Graph>
         
          <Labels></Labels>
          </div>
          
          
          <List></List>
        </div>
  
      </div>
    </div>
  );
}

export default App;