import '../App.css';

//Higher Order Component or Composition in React

function Wrapper(props){
    return(
      <div className="wrapper-container">
        {props.children}
      </div>
    );
}

export default Wrapper;