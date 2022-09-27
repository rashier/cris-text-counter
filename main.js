import './style.css'
// import javascriptLogo from './javascript.svg'
import { counter } from './text-counter.js'


let text = document.getElementById('text')

document.querySelector('#app').innerHTML = `
  <div className="container">
    <div className="title">Text Counter</div>
    <textarea id="text" placeholder="Type your text here..."></textarea>
    <div className="status">
      <span id="char"></span>
      <span id="words"></span>
      <span id="lines"></span>
      <span id="symbols"></span>
    </div>
  </div>
`

text.addEventListener('input', counter)