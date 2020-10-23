import React,{useState} from 'react'
import {CardDeck} from 'react-bootstrap'
import Tour from './tour'
import {data} from './data'

function Tours() {
    const [tours,setTours]=useState(data)
    const removeTour=(id)=>{
        let newTours=tours.filter((tour)=>{
            return tour.id!==id
        })
        setTours(newTours)
    }

    return (
        <div >
            <div style={
                {display:'flex',
                alignItems:'center',
                justifyContent:'center',
                flexDirection:'column'}
                }>
                <div style={{marginBottom:'4rem'}}>
                    <h1 style={{fontWeight:'bold'}}>Our Tours</h1>
                    <div style={{backgroundColor:'#49a6e9',width:'6rem',height:'0.25rem',margin:'auto'}}></div>
                </div>
                {tours.length>0?
                            <CardDeck style={{width:'90%',display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr))',gridGap:'35px 5px'}}>
                {
                    tours.map((tour)=>{
                        return <Tour key={tour.id} {...tour} removeTour={removeTour}/>
                    })
                }
            </CardDeck>:<h2>No Tours available</h2>
                
            }
            </div>
        </div>
    )
}

export default Tours
