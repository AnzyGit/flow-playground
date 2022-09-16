import './App.css';
import ReactFlow, { applyEdgeChanges, applyNodeChanges } from 'react-flow-renderer';
import { useState, useCallback, useEffect } from 'react';

function App() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [error, setError] = useState(false)

  useEffect(() => {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let foo = params.get('url');
    console.log("fetching from: ", foo);
    fetch(foo)
      .then(res => res.json())
      .then((result) => {
        console.log("fetched successfully");
        setEdges(result["edges"]);
        setNodes(result["nodes"]);
      },
        (error) => {
          setError(true)
          console.error(error);
        })
  }, []);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );


  if (error) {
    return (
      <div className="App" style={{ height: 800 }}>
        <p>
          An error occured 😢
        </p>
      </div>
    );
  }
  
  return (
    <div className="h-screen">
      <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      fitView />
    </div>
  )
}

export default App;
