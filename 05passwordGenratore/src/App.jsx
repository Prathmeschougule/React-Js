import { useCallback, useState, useEffect,useRef } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charactorAllowed, setCharactorAllowed] = useState(false);
  const [password, setPassword] = useState('');


  //copy button function
  const copyPasswordToclickbord=useCallback(()=>{

     passwordref.current?.select();
    window.navigator.clipboard.writeText(password)

  },[password])

  //useref hook  verable
  const passwordref=useRef(null)

  // Password Generator Function
  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numberAllowed) {
      str += '0123456789';
    }

    if (charactorAllowed) {
      str += '!@#$%^&*(){}[]';
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charactorAllowed]);

  // Use Effect to Regenerate Password on Dependencies Change
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charactorAllowed, passwordGenerator]);

  return (
    <>
      <div className="pasGenDes">
        <h1 className="heading text-white">Password Generator</h1>
        <div className="passdes overflow-hidden md-4">
          <input
            type="text"
            value={password}
            className="inputtext h-10 rounded-2xl font-semibold p-3 my-3"
            placeholder="password"
            readOnly
           ref={passwordref}
          />
          <button
            className="copybtn outline-none bg-orange-600 text-white"
            onClick={copyPasswordToclickbord}
            
          >
            Copy
          </button>
        </div>
        <div className="flex justify-center">
          <div>
            <input
              type="range"
              min={1}
              max={100}
              value={length}
              className="CursorePointer"
              onChange={(e) => setLength(parseInt(e.target.value, 10))}
            />
            <label className="CharactoretorTex ml-1">Length: {length}</label>
          </div>
          <div className="checkbox">
            <label className="CharactoretorTex">Numbers</label>
            <input
              className="box ml-1"
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
          </div>
          <div className="Stringbox">
            <label className="CharactoretorTex">Characters</label>
            <input
              className="box ml-1"
              type="checkbox"
              checked={charactorAllowed}
              onChange={() => setCharactorAllowed((prev) => !prev)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
