import './App.css';
import Graph from './components/Graph';
import Form from './components/Form';
import Linefunc from './components/LineChart';
import List from './components/List';




function App() {
  return (
    <div className="App">
      <div className='container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800'>
        <h1 className='text-4xl py-8 mb-10 bg-slate-800 text-white rounded'>Expense Tracker</h1>

        {/* Grid columns */}
        <div className='grid md:grid-cols-2 gap-4'>
          {/* Charts */}
          <Graph></Graph>
          <Linefunc></Linefunc>
          {/* Form */}
          <Form></Form>
          <List></List>
        </div>
        <p>Can put stuff here</p>
      </div>
    </div>
  );
}

export default App;