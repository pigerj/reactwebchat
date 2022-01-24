
export default function Message(props)
{
    console.log("Message " + JSON.stringify(props));

    return(
        <div className="row" style={styles.row}>
            <p style={styles.message}>{props.msg}</p>
        </div>
        );
}

const styles = {
    row:{
        backgroundColor: '#9bcae0',
        width: '98%',
        left: '1%',
        position:'relative',
        borderRadius: 5,
    },
    message:{
        left: '1%',
        width: '98%',
        position:'relative',
        overflowWrap: 'break-word',
    },
};