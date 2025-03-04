import { useState } from 'react'
import phrases from './phrases.json'
import { randomItem } from './utils'
import PhraseCard from './components/PhraseCard';
import Button from './components/Button';
import { img1, img2, img3, img4 } from './assets';
import cookieSound from './assets/cookie-break.mp3'

const colors = [
	'#ff6633',
	'#ffb399',
	'#ff33ff',
	'#00b3e6',
	'#e6b333',
	'#3366e6',
	'#999966',
	'#ff9999',
	'#ccff99',
];

const images = [img1, img2, img3, img4];

function App() {
  const [phrase, setPhrase] = useState(randomItem(phrases))
  const [image, setimage] = useState(randomItem(images))

  const changePhrase = () => {
    // Reproduce el sonido de la galleta partiéndose
    const audio = new Audio(cookieSound);
    audio.play();

    setPhrase(randomItem(phrases))
    setimage(randomItem(images))
  }


  return (
    <div className='container' style={{ backgroundImage: `url('${image}')`}}>
      <h1 className='title'>GALLETA DE LA FORTUNA</h1>
      < PhraseCard
        phrase={phrase.phrase}
        author={phrase.author}
      />
      <Button handlePhrase={changePhrase}>
      🥠 🥠 🥠 PRESIONA AQUI PARA SACAR UNA NUEVA GALLETA 🥠 🥠 🥠
        </Button>
    </div>
  )
}

export default App
