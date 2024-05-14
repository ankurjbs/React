export default function TabButton(props) {
    function handleClick(){
        alert('hello');
    } 
  return <li><button onClick={handleClick} >{props.children}</button></li>;
}
