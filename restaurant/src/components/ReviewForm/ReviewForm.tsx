import { useState } from "react";
import Counter from "../Counter/Counter";
import { useForm } from "./use-review-form";

export function ReviewForm(){

    const {form, onNameChange, onTextChange, onRatingChange, onClear} = useForm();

    const {name, text, rating} = form

    function onHandleCounter (countData: number) {
        onRatingChange(countData.toString())
    } 

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            alert(`name: ${form.name}\ntext: ${form.text}\nrating: ${form.rating}`)
        }} style={{marginBottom: "10px"}}>
            <div style={{margin: "10px"}}>
                <span>Name </span>
                <input placeholder="name"
                    value={name}
                    onChange={(event) => {onNameChange(event.target.value)}}
                />
            </div> 
            <div style={{margin: "10px"}}>
                <span>Text </span>
                <input placeholder="text"
                    value={text}
                    onChange={(event) => {onTextChange(event.target.value)}}
                />
            </div>
            <div style={{margin: "10px"}}>
                <span>Rating </span>
                <Counter countValue={rating} onHandleCounter={onHandleCounter}/>
            </div>

            <button type="button" onClick={onClear}>Очистить данные</button>
            <button type="submit">Сохранить данные</button>
        </form>
    )
}