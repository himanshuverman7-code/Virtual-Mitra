import React from "react";
import DynamicListItem from "@/features/products/sections/create-product/DynamicListItem";

const ListItems = ({ array, onRemove, arrayName }) => {
  return (
    <>
      {array.length > 0 && (
        <div className='space-y-2'>
          {array.map((f, i) => {
            return (
              <DynamicListItem
                key={i}
                value={f}
                index={i}
                onRemove={()=>{
                    onRemove(i, arrayName)
                }}
              />
            );
          })}
        </div>
      )}
      {array.length === 0 && (
        <p className='text-xs text-slate-500 text-center py-3'>
          No array added yet. Add at least one item.
        </p>
      )}
    </>
  );
};

export default ListItems;
