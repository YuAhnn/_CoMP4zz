import smile from '../assets/smile.png'
import sad from '../assets/sad.png'
import angry from '../assets/angry.png'
import confused from '../assets/confused.png'
import anxious from '../assets/anxious.png'

const emojiChoices = [
  {option: smile, alt: "Happy"},
  {option: sad, alt: "Sad"},
  {option: angry, alt: "Angry"},
  {option: confused, alt: "Confused"},
  {option: anxious, alt: "Anxious"},
]

const question = "How are you feeling right now?"

const EmojiAssesment = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen mx-auto max-w-[1000px] gap-10">
      <h1 className="text-xl sm:text-4xl md:text-5xl font-bold md:py-2">{question}</h1>
      {/* <hr className="font-black w-[600px] border-1"/> */}
      <div className="mx-4">
        <figure className='flex flex-wrap justify-evenly gap-5'>
           {emojiChoices.map((emoji , index) => (
            <div key={index}>
              <img src={emoji.option} alt={emoji.alt} className="w-[100px] md:w-[90px] sm:w-[60px] rounded-2xl grayscale hover:grayscale-0 duration-300 cursor-pointer hover:filter  hover:drop-shadow-[0_0_6px_rgba(0,0,0,0.6)] ease-in-out" />
            </div>
          ))}
      </figure>
      </div>
    </main>
  )
}

export default EmojiAssesment
