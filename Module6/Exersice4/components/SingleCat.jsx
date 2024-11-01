
export default function SingleCat(props){
    
    const imgeStyle = { height: '100px',  width: '200px', objectFit: "contain" };

    const titleStyle = { textAlign: 'center' };
    
    return(
        <div>
            <p style={titleStyle}>{props.name}({props.latinName})</p>
            <img src={props.image} style={imgeStyle} alt={props.latinName}/>
        </div>
    )

}