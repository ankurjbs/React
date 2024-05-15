import './CoreConcepts.css';

// first way
// export default function CoreConcepts(props){
//   return (
//     <li>
//       <img src={props.image} alt={props.title} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }

// using distructuring method
/* function CoreConcepts({image,description,title}){
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
} */

// second way passs a variable 
// export default function CoreConcepts({concept}){
//   return (
//     <li>
//       <img src={concept.image} alt={concept.title} />
//       <h3>{concept.title}</h3>
//       <p>{concept.description}</p>
//     </li>
//   );
// }

// using variable and distructuring
export default function CoreConcepts({concept}){
    const {title,description,image} = concept;
    return (
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }