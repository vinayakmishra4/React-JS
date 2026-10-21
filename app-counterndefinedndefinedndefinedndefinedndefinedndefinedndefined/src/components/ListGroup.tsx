import { useState } from "react"; // Removed unused useSyncExternalStore
// items ,heading state
interface Props
{
    item:string[];
    heading : string;
    // function using props
    onselectitem:(item:String) => void;
}


function ListGroup({item,heading,onselectitem}:Props) {

    
    // Hook: selectIndex holds the value, setselectIndex updates it
    const [selectIndex, setselectIndex] = useState(-1);

    return (
        <>
            <h1>{heading}</h1>
            
            {item.length === 0 && <p>No items found</p>}

            <ul className="list-group">
                {item.map((item, index) => (
                    <li 
                        // Fixed case sensitivity here: changed selectindex to selectIndex
                        className={selectIndex === index ? "list-group-item active" : "list-group-item"} 
                        key={index}
                        // Fixed function call here: changed selectIndex(index) to setselectIndex(index)
                        onClick={() => 
                        {
                            setselectIndex(index);
                            onselectitem(item);
                        }}

                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
