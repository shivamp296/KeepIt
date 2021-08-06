import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote=(props)=>{
    const [note,setnote]=useState({
        title:"",
        content:""
    });

    const InputEvent=(e)=>{

        // const value=e.target.value;
        // const name=e.target.name;

        const {name,value}=e.target;

        setnote((prevData)=>{
            return {
                ...prevData,
                [name]:value,
            }
        });
        console.log(note);
    }

    const addEvent=()=>{
        props.passNote(note);
        setnote({
            title:"",
            content:""
        });   
    }

    return (
        <>
            <div className="main_note">
                <form>
                    <input type="text" placeholder="Title" autoComplete="off" name="title" value={note.title} onChange={InputEvent}/>
                    <textarea row="" column="" placeholder="Write a note" name="content" value={note.content} onChange={InputEvent}/>                
                    <Button onClick={addEvent}>
                        <AddIcon className="plus_sign"/>
                    </Button>
                </form>
            </div>
        </>
    );
};

export default CreateNote;