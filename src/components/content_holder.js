import Message from "./message"

export default function MessagesContentHolder(props)
{
    console.log("MessagesContentHolder " + JSON.stringify(props.messages_array));

    return(
        <div className = 'messages_holder' style = {styles.root_container}>
            {
                props.messages_array.map((obj,index)=>{
                    return <Message key = {index} msg={obj.msg}/>
                })
            }
        </div>
        );
}

const styles = {
    root_container:{
        justifyContent: 'center',
        backgroundColor: '#73a3ba',
        width: '100%',
        height: '100%',
        bottom : 0,
        position : 'absolute',
        overflow: 'auto',
    },
};