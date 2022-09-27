
export function counter() {
  let stats = document.querySelector('.status')
  let text = document.getElementById('text')
  let char = document.getElementById('char')
  let words = document.getElementById('words')
  let lines = document.getElementById('lines')
  let symbols = document.getElementById('symbols')
  let o = 'a'
  console.log(o);
  console.log(o.split(/[!@#$%^&*+()_={};:'"<>.,?/-]/).length);


  if (text.value.length === 0) {
    stats.style.display = 'none'
  } else {
    stats.style.display = 'block'
    char.innerHTML = text.value.length + ' Characters'
    words.innerHTML = text.value.trim().split(/\s+/).length + ' Words'
    lines.innerHTML = text.value.split('\n').length + ' Lines'
    symbols.innerHTML = text.value.split(/[!@#$%^&*+()_={};:'"<>.,?/-]/).length - 1 + ' Symbols'
  }


}

