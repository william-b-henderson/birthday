import './App.css';

function App() {
  return (
    <div className="App" style={{display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', width: '100vw', height: '100vh' }}>
      <img alt='balloons' src='balloons.jpeg' />
      <span style={{position: 'absolute', top: '50vh', left: '25vw', right: '25vw'}}>Happy Birthday Hayden!!! This domain is all yours. Whenever you want to host your website, let me know and I will set up the DNS for you.</span>
    </div>
  );
}

export default App;
