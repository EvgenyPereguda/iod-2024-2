
export default function SingleCat(props){
  
  const myImageStyle = { height: '100px', objectFit: "contain" };
    
  const handleDelete = (e) => {  
    props.onDeleteCat(props.id);
  };

    return(
        <div>
            <p>{props.name}({props.latinName})</p>
            <img src={props.image} style={myImageStyle} alt={props.latinName}/>
            <button onClick={handleDelete} style={{background: 'lightblue', position: 'absolute', borderRadius: 15,  marginLeft:0, marginTop: -100, width:30, height:30 }}> - </button>
        </div>
    )

}