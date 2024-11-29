import Card from './Card'
import LegolasImage from '../assets/legolas.jpg'
import AragonImage from '../assets/aragon.jpg'
import GimliImage from '../assets/gimli.jpg'
import GandalfImage from '../assets/gandalf.jpg'

const data = [
    {id:1, name: "Legolas", image:LegolasImage},
    {id:2, name: "Aragon", image:AragonImage},
    {id:3, name: "Gimli", image:GimliImage},
    {id:4, name: "Gandalf", image:GandalfImage},
]
const CardList = () => {

    function action(name){
        alert(`this is an action from ${name}`)
    }
    return (    
      <div className='card-list'>
        {data.map((card) => <Card key={card.id} name={card.name} image={card.image} action={action}/>)}

        {/* <Card name="Legolas" image={LegolasImage}/>
        <Card name="Aragon" image={AragonImage}/>
        <Card name="Gimli" image={GimliImage}/>
        <Card name="Gandalf" image={GandalfImage}/> */}
        </div>
    )
}

export default CardList