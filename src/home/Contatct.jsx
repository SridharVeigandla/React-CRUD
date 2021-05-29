import React, {useState} from "react";

function Contact(){
   // alert("in cont func");

  const[fName,setfName]=useState("sridhar")
  const[lName,setlName]=useState("")
  const[phone,setPhone]=useState("9490614663")
  const[email,setemail]=useState("Email")
  
  //  const[name,setname]= useState("Sridhar");
    //const[lName,setlName]=useState("Veigandla");

    const submit = (  )=> {
        alert(fName + "," + lName + "," +phone + ","+email);
        console.log(fName + ","+lName +  "," +phone + ","+email);
    }
     
 

  
    
    function setPhoneValue(event){

        setPhone(event.target.value);


    }

    function setNameValue (event){
      //  alert("in details func");

        setfName(event.target.value);


    }

    function setlNameValue(event){
        setlName(event.target.value);


    }


    return(
         <>
        <h1>from contact form</h1>
        <label>First Name:</label>
        <input type="text" id="txt" value={fName} onChange={setNameValue} ></input>
        <label>Last Name:</label>
        <input type="text" id="txt1" value={lName} onChange={setlNameValue} ></input><br/>
        <label>Phone:</label>
        <input type="text" id="phone" value={phone} onChange={event=>setPhone(event.currentTarget.value)}></input>
        <label>Email:</label>
        <input type="email" id="email" value={email} onChange={event=>setemail(event.currentTarget.value)}></input>

        <input type="button" id="btn" value="click" onClick={submit}></input>
         </>
    );



}
export default Contact;