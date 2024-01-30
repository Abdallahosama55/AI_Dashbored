import { useState } from 'react';

import Slide from '@mui/material/Slide';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import ClickAwayListener from '@mui/material/ClickAwayListener';

import { bgBlur } from 'src/theme/css';

import Iconify from 'src/components/iconify';
import { borderBottom } from '@mui/system';

// ----------------------------------------------------------------------

const HEADER_MOBILE = 32;
const HEADER_DESKTOP = 48;

const StyledSearchbar = styled('div')(({ theme }) => ({

  borderRadius: 50,
  zIndex: 0,
  top: 15,
 width:'50%',
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  height: HEADER_MOBILE,
  padding: theme.spacing(0, 2),
  boxShadow: theme.customShadows.z8,
  [theme.breakpoints.up('md')]: {
    height: HEADER_DESKTOP,
    padding: theme.spacing(0, 2),
    borderRadius: 50,
    top: 15,
    left: 10,
    width: '75%',
    
    
  },



  [theme.breakpoints.up('lg')]: {
    height: HEADER_DESKTOP,
    padding: theme.spacing(0, 2),
    borderRadius: 50,
    top: 15,
    left: 10,
    width: '75%',
    
    
  },
}));

// ----------------------------------------------------------------------

export default function Searchbar() {
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
       

          <StyledSearchbar>
            <Input
              autoFocus
              fullWidth
              disableUnderline
              placeholder="بحث"
               dir='rtl'
              sx={{ mr: 1,fontWeight: 'fontWeightBold' }}
            />
            <Button  onClick={handleClose}>
            <Iconify icon="eva:search-fill" />
            </Button>
          </StyledSearchbar>
        
      </div>
    </ClickAwayListener>
  );
}
