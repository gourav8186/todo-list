import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react';

const AddItems = ({ newItem, setNewItem, handleSubmit }) => {
    const inputRef = useRef();
    return (
      <form className="addForm" onSubmit={handleSubmit}>
        <input
            autoFocus
            id="addItem"
            ref={inputRef}
            type="text"
            placeholder="Add List Items"
            required
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
         />
         <button
         type="submit"
         onClick={() => inputRef.current.focus()}
         aria-label="Add Item">
            <FaPlus/>
         </button>
      </form>  
    );
}

export default AddItems