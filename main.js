import './style.css'
// import javascriptLogo from './javascript.svg'
import { counter } from './text-counter.js'



document.querySelector('#app').innerHTML = `
  <div class="container">
    <div class="title">Text Counter</div>
    <textarea id="text" placeholder="Type your text here..."></textarea>
    <div class="status">
      <span id="char"></span>
      <span id="words"></span>
      <span id="lines"></span>
      <span id="symbols"></span>
    </div>
  </div>
`
let text = document.getElementById('text')

text.addEventListener('input', counter)
