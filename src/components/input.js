import react, {useState} from "react";

export default function Input(props)
{
    const [input,setInput] = useState('');

    const handleChange = e =>{
        setInput(e.target.value);
    }
    const handleSubmit = e =>{
        e.preventDefault();
        props.onClickSubmit(input);
        setInput('');
    }

    return (
        <form className='input_form' style={styles.root_container}>
            <input 
            className='todo-input'
            style={styles.input}
            type='text' 
            placeholder='some message' 
            value={input} 
            onChange={handleChange}
            />
            <button className='todo-button' style={styles.button} onClick={handleSubmit}>submit</button>
        </form>
    );
}

const styles = {
    root_container:{
        justifyContent: 'center',
        backgroundColor: '#73a3ba',
        width: '100%',
        height: '5%',
        bottom : '-5%',
        position : 'absolute',
    },
    button:{
        width: '20%',
        height: '100%',
        right: 0,
        bottom: 0,
        position: 'absolute'
    },
    input:{
        width: '75%',
        height: '100%',
        left: 0,
        bottom: 0,
        position: 'absolute',
        boxSizing:'border-box',
    }
};