import { useParams } from "react-router-dom";

const data = [
    {id: 1, name: 'Giga', age: 27},
    {id: 2, name: 'Dato', age: 27},
    {id: 3, name: 'Temo', age: 27}
]

const ParamPage = () =>{
    const param = useParams()

    const user = data.find(user => user.id == param.id)
    if(!user){
        return <div>user not found</div>
    }
    return (
        <div>
            <h1>{param.id}</h1>
            <h2>Param Route (Dynamic)</h2>
        </div>
    )
}
export default ParamPage