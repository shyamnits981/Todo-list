

function List(props) {

   const deleteItemFormList = key =>{
    const newlist =   props.itemList.filter(itemObj=>{
       return itemObj.key !==key;
      });
      props.updateItemList(newlist);
   };
   

   return (
      <div>
      {props.itemList.map(itemObj => {
            return (
               <div className="Item">
                <p>{itemObj.item}</p>
                  <button onClick={() => deleteItemFormList(itemObj.key)}>X</button>
                  </div>
                  );
             } )}
            </div>
            )
         }

export default List