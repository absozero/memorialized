import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'



document.querySelector('#app').innerHTML = `
  <div>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`


document.querySelector('#mapelement').innerHTML = `
<div id="g-mapdisplay">
<iframe style="height: 30rem;width: 75%;border-radius: 10px;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=Stanford+Health+Care,+Emeryville,+CA,+USA&key=${import.meta.env.VITE_GMAPS_API_KEY}">
</iframe>
</div>
`

setupCounter(document.querySelector('#counter'))