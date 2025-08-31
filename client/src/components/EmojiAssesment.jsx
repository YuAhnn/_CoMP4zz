import smile from '../assets/smile.png'
import sad from '../assets/sad.png'
import angry from '../assets/angry.png'
import confused from '../assets/confused.png'
import anxious from '../assets/anxious.png'
import { useState } from 'react'

const emojiChoices = [
  {option: smile, alt: "Happy"},
  {option: sad, alt: "Sad"},
  {option: angry, alt: "Angry"},
  {option: confused, alt: "Confused"},
  {option: anxious, alt: "Anxious"},
]

const question = "How are you feeling right now?"

const EmojiAssesment = () => {
  const[selected, setSelected] = useState(null)

  return (
    <main className="flex flex-col items-center justify-center h-screen mx-auto max-w-[1000px] gap-10">
      <h1 className="text-xl sm:text-4xl md:text-5xl font-bold md:py-2">{question}</h1>
      <div className="mx-4">
        <figure className='flex flex-wrap justify-evenly gap-5'>
          {emojiChoices.map((emoji, index) => (
            <div key={index} onClick={() => setSelected(index)}>
              <img
                src={emoji.option}
                alt={emoji.alt}
                className={`w-[100px] md:w-[90px] sm:w-[60px] rounded-2xl grayscale 
                  duration-300 cursor-pointer ease-in-out
                  ${selected === index ? 'grayscale-0 drop-shadow-[0_0_6px_rgba(0,0,0,0.6)]' : 'hover:grayscale-0 hover:drop-shadow-[0_0_6px_rgba(0,0,0,0.6)]'}`}
              />
            </div>
          ))}
        </figure>
      </div>
    </main>
  )
}

export default EmojiAssesment
