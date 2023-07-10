import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CodeMirror from '@uiw/react-codemirror';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import axios from 'axios';

const Problem = () => {
  const question = useLocation();
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

  const [lang, setLang] = useState('python');
  const [code, setCode] = useState('#Your code goes here!');
  const [token, setToken] = useState('');
  const [id, setId] = useState(71);
  const [output, setOutput] = useState('');
  const [status, setStatus] = useState('');
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
      setStatus(response.data.status.description);
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
        stdin: question.state.input,
        expected_output: question.state.output,
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
  const handleReset = () => {
    setCode(langs[lang]);
    setToken('');
    setOutput('');
  };

  const selectLanguage = (event) => {
    setLang(event.target.value);
  };

  console.log(question.state.output);
  return (
    <div className='mb'>
      <div className='text-center bg-secondary p-3'>
        <strong className='text-light'>{question.state.title}</strong>
      </div>
      <div class='row'>
        <div class='col-md-3 m-3 my-4 border-2 border-dark border-end '>
          <div className='border-bottom border-dark'>
            <p>{question.state.desc}</p>
          </div>
          <div className='my-3'>
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
              {/* <p>{output}</p> */}
              <h3 className='text-success'>{status}</h3>
            </div>
          </div>
        </div>
        <div className='col-md-8'>
          <CodeMirror
            className='editor m-3 my-4'
            value={code}
            theme={okaidia}
            options={{
              keymap: 'sublime',
              mode: { lang },
            }}
            onChange={onChange}
          />
          <div className='row mx-3'>
            <div
              className='text-bg-success cursor text-center p-3 my-2 col-md-5'
              onClick={SubmitCode}
            >
              Submit
            </div>
            <div
              className='offset-md-2 cursor text-bg-danger text-center p-3 my-2 col-md-5'
              onClick={handleReset}
            >
              Reset
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem;
