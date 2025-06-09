import { useState, useCallback } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbers) str += "0123456789";
    if (characters) str += "!@#$%^&*/?><";

    for (let i = 0; i < array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char);
    }

    setPassword(pass);
  }, [length, numbers, characters, setPassword]);

  return (
    <>
      <div className="w-full max-w-md mx-auto rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
        <h2 className="text-white text-center">Password Generator</h2>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          <input
            type="text"
            value={password}
            className="outline-none w-full y-1 px-3"
            placeholder="Password"
            readOnly
          />
          <button>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className="flex items-center gap-x-1">
            <input 
            type="range" 
            min={6}
            max={100}
            value={length} 
            className="cursor-pointer"
            />
            <label>Length : {length}</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
