import React,{useState} from 'react'
import {Card,Button} from 'react-bootstrap'


function Tour({id,type,imageUrl,title,price,text,removeTour}) {
    const [readMore,setReadMore] = useState(false)
    const cardStyle={
        paddingRight:'0.8rem',
        fontSize:'1.1rem',
        fontWeight:'bold',
        display:'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

    return (
        <Card style={{boxShadow:'0rem 0.5rem 0.9rem rgb(224, 224, 224)',alignSelf:'flex-start'}}>
            <Card.Img variant="top" src={imageUrl}></Card.Img>
            <Card.Body>
            <strong style={{fontSize:'0.8rem',color:'#0a7bbd'}}>{type}</strong>
                <Card.Title style={cardStyle}>
                    {title}
                    <Button variant='primary' size="sm" disabled style={{paddingTop:'0px',paddingBottom:'0px'}}>
                        {price}
                    </Button>
                </Card.Title>
                <Card.Text>
                    {readMore?text:`${text.slice(0,100)}...`}
                    <Button variant='link' size='sm' onClick={()=>{setReadMore(!readMore)}}>
                        {readMore?'Show less':'Read more'}
                    </Button>
                </Card.Text>
                <div style={{textAlign:'center'}}>
                <Button variant='outline-danger'
                style={{textAlign:'center',padding:'0px 3.5rem'}}
                size='sm'
                onClick={()=>{removeTour(id)}}
                >
                    Not interested
                </Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Tour
