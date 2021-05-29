import React, { useState } from 'react';


function Mull() {

    const [fno, setfno] = useState(0)
    const [sno, setsno] = useState(0)
    const [res, setres] = useState(0)
    const [isValid, setisValid] = useState(false)


    function test() {
        if (isNaN(fno) || fno < 1 || fno > 10) {
            setisValid(true)
        }
        else if(isNaN(sno)|| sno < 1 || sno > 10){

            setisValid(true)
        }
        else{
            setisValid(false)
            setres(parseInt(fno) * parseInt(sno))
        }

        

    }

    function fnoFun(event) {

        setfno(event.target.value);
    }

    function snoFun(event) {
        setsno(event.target.value);
    }

    return (

        <>
            <h1>From Mull</h1>

            <label for="fname">First no.:</label><br />
            <input type="text" id="fno" name="fno" onChange={fnoFun} value={fno} /><br />
            <label for="lname">Second no.:</label> <br />
            <input type="text" id="sno" name="sno" onChange={snoFun} value={sno} /><br /><br />
            <input type="button" value="Mull" onClick={test} />
            {isValid && <p>invalid input</p>}



           Result:{res}

        </>
    );



}
export default Mull;