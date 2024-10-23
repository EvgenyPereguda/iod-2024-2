
export default function SingleCat(props){

    return(
        <div>
            <p>{props.name}({props.latinName})</p>
            <img src={props.image} width="150" alt={props.latinName}/>
        </div>
    )

}