import { useEffect, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import Paper from '@mui/material/Paper';
import './App.css';
import { Top_Bar } from './nav_bar/Nav_bar';
import { Intro } from './intro/intro';
import { About } from './About/About';
import { Service } from './Service/service';
import { Skills } from './skills/skills';
import { Work } from './work/work';
import { Contact } from './contact/contact';
import { Message } from './message/Message';

function App() {
  const [data, setData] = useState(null);
  const [mode, setMode] = useState("dark");

  const getData = async () => {
    try {
      const response = await fetch('https://portfolio-back-cdes.onrender.com/');
      if (!response.ok) throw new Error("Failed to fetch data");
      const mvs = await response.json();
      setData(mvs);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const sty = {
    color: mode === "dark" ? "white" : "black",
  };

  return (
 <ThemeProvider theme={darkTheme}>
<Paper >
  <div >
    {data ? (
      <>
        <Top_Bar mode={mode} setMode={setMode} sty={sty} />

        <Intro sty={sty} data={data} />
        <About sty={sty} data={data} />
        <Service sty={sty} data={data} />
        <Skills sty={sty} data={data} />
        <Work sty={sty} data={data} />
        <Contact sty={sty} data={data} />
        <Message sty={sty} data={data} />
        
      </>
    ) : (
      <Load />
    )}
  </div>
</Paper>
</ThemeProvider> 
  )
}

function Load() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <p>Loading...</p>
    </div>
  );
}

export default App;


