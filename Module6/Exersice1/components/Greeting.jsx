


const styles = {
    main: {
      margin: 10,
      padding: 10,
      background: 'yellow',
      display: 'flex',
      height: '600',
      flexDirection: 'row'
   }
}

function Greeting(props) {
        
    if (props.name) name = props.name; 
    
    return (
      <div style={styles.main}>
        {props.children}
        <div>&nbsp;</div>
        {props.name? <div>{name}</div> : <div>World</div>}
      </div>
    );
  }
  export default Greeting; // render this component in App.jsx. Try out different prop values, add support for more