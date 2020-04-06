import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import 'typeface-roboto';
import { Draggable } from 'react-beautiful-dnd';



const TrelloCard = ({ text,id,index }) => {
    return(
        <Draggable draggableId={String(id)} index={index} >
            { provided => (
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
                    <div className="card-content">
                        <Card>
                            <CardContent>
                                <Typography  gutterBottom>
                                    {text}
                                </Typography>  
                            </CardContent>              
                        </Card>
                    </div>
                </div>   
            )}  
        </Draggable>
             
    );
}



export default TrelloCard;