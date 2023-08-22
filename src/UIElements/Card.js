import React,{ useEffect, useState } from 'react';
import './Card.css';
import Modal from './Modal.js';
import Button from './Button.js';


const Card = (props) => {

    const [showForm, setShowForm] = useState(false);
    const [inp, setInp] = useState("");
    let [newTitle, setNewTitle] = useState(props.Title);
   

    const openFormHandler = () => {
        setShowForm(true);
    }
    const closeFormHandler = () => {
        setShowForm(false);
    }
    const inputHandler = () => {
        setInp("");
        if (inp !== "") {
            setNewTitle(inp);
        }
        setShowForm(false);
        console.log(newTitle);
    }
    useEffect(() => {
        newTitle = inp;
    },[newTitle]);
    const poster_url = `https://www.themoviedb.org/t/p/w220_and_h330_face${props.Poster}`;


    return (
        <React.Fragment>
            <Modal show={showForm} onCancel={closeFormHandler} header={newTitle} footerClass="card__modal-actions" contentClass="modal__content"
                footer={<Button onClick={closeFormHandler}>CLOSE</Button>} >
                <form className="form-container center" onSubmit={inputHandler}>
                    <input className="form-input"value={inp} onChange={(e)=>setInp(e.target.value) } placeholder="Enter new Name" ></input>
                    <Button type="submit">Change</Button>
                </form>
            </Modal>
        <li>
        
                <div className="card-bg">
                    <div className="user">hi</div>
            <div className="card-img">
                    <img src={poster_url} alt={props.Title } />
                </div>
            <div className="card-content">
                    <div className="card-title">{newTitle}</div>
                    <footer className="card-footer"> <Button onClick={openFormHandler}>Edit</Button></footer>
                </div>
                
           
            </div>
           
            </li>
            </React.Fragment>

    );
}
export default Card;