import React, {useState} from 'react';
import Input from './components/input';
import MessagesContentHolder from './components/content_holder';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {messages_array : []};
  }

  componentDidMount() {
    console.log("componentDidMount " + JSON.stringify(this.state));
    this.refresh("");
  }

  render() {
    return (
      <div className="App">
      <div className = 'root_container' style={styles.root_container}>
        <MessagesContentHolder messages_array={this.state.messages_array}/>
        <Input onClickSubmit={this.onClickSubmit}/>
      </div>
      <button className='delete-button' style={styles.button} onClick={this.onClickdelete}>delete</button>
    </div>
    );
  }

  setMessagesArray(arr)
  {
    this.setState({ 'messages_array' : arr});
  };

  refresh = (msg)=>{

    fetch('https://p2-1643028221716.azurewebsites.net/get_data?msg='+msg)
    .then(data => data.text())
    .then(data => {
      console.log("cb");
      console.log(data);
      let arr = data.split("|");
      for(let i = arr.length - 1; i >= 0 ; i--)
      {
        if (arr[i].length === 0) arr.splice(i);
      }
      let objects = [];
      for(let i = 0; i < arr.length; i++)
      {
        objects.push({msg:arr[i]})
      }
      this.setMessagesArray(objects);
    });

  };

  onClickSubmit = (msg)=>{
    //setMessagesArray([...messages_array, {'msg':msg}]);
    this.refresh(msg);
  };

  onClickdelete = ()=>{
    //setMessagesArray([...messages_array, {'msg':msg}]);
    fetch('https://p2-1643028221716.azurewebsites.net/delete_data?')
    .then(data => data.text())
    .then(data => { 
      this.refresh("");
    });
  };


};
/*
function App() 
{
  const [messages_array, setMessagesArray] = useState([]);//([{msg:"fdsss"},{msg:"fdsss"}]);

  const refresh = (msg, on_finish)=>{

    fetch('https://p2-1643028221716.azurewebsites.net/get_data?msg='+msg)
    .then(data => data.text())
    .then(data => {

      console.log(data);
      on_finish(data);

    });

  };

  const onClickSubmit = (msg)=>{
    //setMessagesArray([...messages_array, {'msg':msg}]);
    refresh(msg,(response)=>{
      console.log("cb");
      console.log(response);
      let arr = response.split("|");
      for(let i = arr.length - 1; i >= 0 ; i--)
      {
        if (arr[i].length === 0) arr.splice(i);
      }
      let objects = [];
      for(let i = 0; i < arr.length; i++)
      {
        objects.push({msg:arr[i]})
      }
      setMessagesArray(objects);
    });
  };

  const onClickdelete = ()=>{
    //setMessagesArray([...messages_array, {'msg':msg}]);
    fetch('https://p2-1643028221716.azurewebsites.net/delete_data?')
    .then(data => data.text())
    .then(data => {
      console.log(data);
    });
  };

  return (
    <div className="App">
      <div className = 'root_container' style={styles.root_container}>
        <MessagesContentHolder messages_array={messages_array}/>
        <Input onClickSubmit={onClickSubmit}/>
      </div>
      <button className='delete-button' style={styles.button} onClick={onClickdelete}>delete</button>
    </div>
  );
};
*/
const styles = {
  root_container:{
    position: 'relative',
    justifyContent: 'center',
    minWidth : '300px',
    maxWidth : '500px',
    minHeight : '500px',
    maxHeight : '700px',
    marginLeft: "auto",
    marginRight: "auto",
  }
};

//export default App;
