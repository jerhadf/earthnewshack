

import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const EarthSearch = (props) => {
  return (
    <Autocomplete
      {...props}
      sx={{
        '& .MuiInputBase-root': {
          position: 'relative',
          borderRadius: 4,
        },
        '& .MuiInputBase-root::before': {
          content: '""',
          position: 'absolute',
          top: -3,
          right: -3,
          bottom: -3,
          left: -3,
          background: 'linear-gradient(90deg, rgba(75,192,201,1) 0%, rgba(42,245,152,1) 50%, rgba(16,21,23,1) 100%)',
          borderRadius: 5,
          zIndex: -1,
        },
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search climate news"
          InputLabelProps={{ // style the search text
            ...params.InputLabelProps,
            shrink: true,
            style: { 
                textAlign: 'center',
                color: 'white', 
                textShadow: '1px 1px 1px #000000',
                fontFamily: 'Avenir, Roboto, sans-serif',
                fontSize: '1.5rem'
            }, 
          }}
          inputProps={{
            ...params.inputProps,
            style: { textAlign: 'center' }, // Center the input text
          }}
        />
      )}
    />
  );
};

export default EarthSearch;
