import React, { useState } from 'react';

function Add() {

    const [fno, setfno] = useState(10);
    const [sno, setsno] = useState(10);
    const [res, setRes] = useState(0);
    function test() {
        setRes(parseInt(fno) + parseInt(sno));
    }


    function test1() {
        setRes(parseInt(fno) - parseInt(sno));
    }


    const fnoFun = (event) =>{
        setfno(event.target.value);
    }
    const snoFun = (event) =>{
        setsno(event.target.value);
    }



    return (
        <>
            <h1>from add</h1>


            <label for="fname">First no.:</label><br />
            <input type="text" id="fno" name="fno" onChange={fnoFun} value={fno} /><br />
            <label for="lname">Second no.:</label> <br />
            <input type="text" id="sno" name="sno" onChange={snoFun} value={sno} /><br /><br />
            <input type="button" value="Add" onClick={test} />
            <input type="button" value="sub" onClick={test1}/>



            <div id="res">{res} </div>

        </>
    );



}

export default Add;