import drink from '../assets/winter.jpeg'
import flag from  '../assets/flag.jpeg'

function Loura() {
    const nd = '2024-09-24'

    const todayDate = new Date().toISOString().split('T')[0]


  return (
    <div className='LouraStyle'>
          <h1>Hello, this is Loura</h1>
    <img src={drink} alt="hot chocolate" />
          <p>I love drinking hot chocolate during winter </p>
          <h2 className={todayDate == nd ? 'greenText' : 'redText'}>{todayDate == nd ? 'Today is the national day' : 'The national day is not today'}</h2>
          <img className={todayDate != nd ? 'none' : ''} src={flag} alt="flag" />

    </div>
  )
}

export default Loura
