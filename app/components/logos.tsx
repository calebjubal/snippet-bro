import React from 'react'
import DataObjectIcon from '@mui/icons-material/DataObject'

function Logo() {
    return (
      <div className="flex gap-2 items-center">
          <div className={`bg-[#FF3366] p-[6px] rounded-md`}>
              <DataObjectIcon sx={{ fontSize: 27, color: "white" }} />
          </div>
          <div className="flex gap-1 text-[19px]">
              <span className={`font-bold text-[#FF3366]`}>Snippet</span>
              <span className='text-slate-600'>Bro</span>
          </div>
      </div>
    )
  }

export default Logo