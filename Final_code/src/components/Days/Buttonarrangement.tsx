import React from 'react';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";

function Buttonarrangement (){
    const navigate = useNavigate();
    return(
        <div>
            <Stack direction="column" spacing={4} style={{padding: "20px",alignItems:"center"}}>
                <h1> Screen 1 </h1>
                <Stack direction="row" spacing={4} >
                    <Button variant="outlined" onClick={()=> {navigate('/Module2')}}>hello</Button>
                    <Button variant="outlined"> one </Button>
                    <Button variant="outlined"> two </Button>
                    <Button variant="outlined"> three </Button>
                    <Button variant="outlined"> four </Button>
                </Stack>
                <h1>  Screen 2</h1>
                <Stack direction="row" spacing={4} >
                    <Button variant="outlined">hello</Button>
                    <Button variant="outlined"> one </Button>
                    <Button variant="outlined"> two </Button>
                    <Button variant="outlined"> three </Button>
                    <Button variant="outlined"> four </Button>
                </Stack>
                <h1> Screen 3</h1>
                <Stack direction="row" spacing={4} >
                    <Button variant="outlined">hello</Button>
                    <Button variant="outlined"> one </Button>
                    <Button variant="outlined"> two </Button>
                    <Button variant="outlined"> three </Button>
                    <Button variant="outlined"> four </Button>
                </Stack>
            </Stack>
        </div>
    )
}

export default Buttonarrangement;