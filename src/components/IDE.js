import React, { useEffect, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import axios from 'axios';

const IDE = () => {
  const ids = {
    python: 71,
    java: 62,
    cpp: 54,
  };
  const langs = {
    python: '#Your Code goes here!',
    java: `class Main {
     public static void main(String[] args) {
        //  Your code goes here!
     }
 }`,
    cpp: `#include<iostream>
using namespace std;
int main(){
    // Your Code goes here!
    return 0;
}`,
  };

  const [code, setCode] = useState('#Your Code Goes HERE!');
  const [lang, setLang] = useState('python');
  const [token, setToken] = useState('');
  const [id, setId] = useState(71);
  const [output, setOutput] = useState('');
  useEffect(() => {
    setCode(langs[lang]);
  }, [lang]);

  useEffect(() => {
    setId(ids[lang]);
  }, [lang]);

  const onChange = React.useCallback((code) => {
    setCode(code);
  }, []);

  async function getOutput() {
    const options = {
      method: 'GET',
      url: `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
      params: {
        base64_encoded: 'false',
        fields: '*',
      },
      headers: {
        'X-RapidAPI-Key': 'b1d1ff756amshdae80c43fac4fb5p143f28jsnaca646664475',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
      },
    };
    try {
      const response = await axios.request(options);
      setOutput(response.data.stdout);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function SubmitCode() {
    const options = {
      method: 'POST',
      url: 'https://judge0-ce.p.rapidapi.com/submissions',
      params: {
        base64_encoded: 'false',
        fields: '*',
      },
      headers: {
        'content-type': 'application/json',
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': 'b1d1ff756amshdae80c43fac4fb5p143f28jsnaca646664475',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
      },
      data: {
        language_id: id,
        source_code: code,
      },
    };

    try {
      let response = await axios.request(options); //.then(setToken(response.data.token)).then(console.log(token)).then(getOutput());
      setToken(response.data.token);
      console.log(token);
      // getOutput();
    } catch (error) {
      console.error(error);
    }
  }

  const handleClick = () => {
    console.log(code);
  };

  // Code state Ready
  // ID state Ready
  // Boiler Plate Ready

  const handleReset = () => {
    setCode(langs[lang]);
    setToken('');
    setOutput('');
  };

  const selectLanguage = (event) => {
    setLang(event.target.value);
  };

  return (
    <div>
      <h1 className='text-center'>CodeSage IDE</h1>
      <div className='row'>
        <div className='col-md-2'>
          <div className='border-dark border-bottom'>
            <label for='language'>&nbsp;Select Language:&nbsp;</label>
            <select name='language' id='language' onChange={selectLanguage}>
              <option value='python'>Python</option>
              <option value='java'>Java</option>
              <option value='cpp'>C++</option>
            </select>
            <p class='text-danger m-2'>* Enter the complete code.</p>
            <p class='text-danger m-2'>
              * IDE only support core programming, don't import any other
              modules.
            </p>
            <p class='text-danger m-2'>
              * Only the output will be displayed, not errors.
            </p>
          </div>
          <div class='my-2'>
            {token && (
              <div
                className='offset-md-1 cursor text-bg-success text-center p-3 my-2 col-md-7'
                onClick={getOutput}
              >
                Show Output
              </div>
            )}
            <div className='m-3'>
              <h5>Output:</h5>
              <p>{output}</p>
              <h3 className='text-success'>{status}</h3>
            </div>
          </div>
        </div>
        <CodeMirror
          className='col-md-9 editor'
          value={code}
          theme={okaidia}
          options={{
            keymap: 'sublime',
            mode: { lang },
          }}
          onChange={onChange}
        />
      </div>
      <div className='row m-1'>
        <div
          className='offset-md-2 cursor text-bg-success text-center p-3 my-2 col-md-4'
          onClick={SubmitCode}
        >
          Submit
        </div>
        <div
          className='offset-md-1 cursor text-bg-danger text-center p-3 my-2 col-md-4'
          onClick={handleReset}
        >
          Reset
        </div>
      </div>
    </div>
  );
};

export default IDE;
