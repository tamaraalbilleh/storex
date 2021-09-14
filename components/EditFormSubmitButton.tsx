import Submit from "../assets/submit.svg";
import React from 'react';
import { TouchableOpacity  } from 'react-native';
import { useFormikContext } from "formik";

function EditFormSubmitButton({handleSubmit}) {
    const { values } = useFormikContext();
console.log ('values', values)
const item  =  values  ; 
    return (
        <TouchableOpacity onPress={()=>handleSubmit(item)} >
            <Submit width={35} />
        </TouchableOpacity >
    );
}

export default EditFormSubmitButton;
