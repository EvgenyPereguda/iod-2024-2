
export default function SingleCat(props){
  
  const imgeStyle = { height: '100px', objectFit: "contain" };
  
  const titleStyle = { textAlign: 'center' };
    
  const handleDelete = (e) => {  
    props.onDeleteCat(props.id);
  };
    
  return(
        <div>
            <p style={titleStyle}>{props.name}({props.latinName})</p>
            <img src={props.image} style={imgeStyle} alt={props.latinName}/>
            <button onClick={handleDelete} style={{background: 'lightblue', position: 'absolute', borderRadius: 15,  marginLeft:0, marginTop: -100, width:30, height:30 }}> - </button>
        </div>
    )

}