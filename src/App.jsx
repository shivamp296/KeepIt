import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const App=()=>{
    const [addItem,setItem]=useState([]);
    
    const addNote=(note)=>{
        // alert("Im click");
        setItem((prevdata)=>{
            return [...prevdata,note];
        }); 
    };

    const onDelete=(id)=>{
        console.log("Upto here");
        console.log(id);

        // setItem((olddata)=>{
        //     olddata.filter((currdata,indx)=>{
        //         return indx !== id;
        //     });
        // });              //Huge error...

        setItem((olddata)=>
            olddata.filter((currdata,indx)=>{
                return indx !== id;
            })
        );
    };

    return (
        <>
            <Header/>
            <CreateNote passNote={addNote}/>
            {addItem.map((val,index)=>{
                return (<Note key={index} id={index} title={val.title} content={val.content} deleteItem={onDelete}/>);
            })}
            <Footer/>
        </>
    );
};

export default App;