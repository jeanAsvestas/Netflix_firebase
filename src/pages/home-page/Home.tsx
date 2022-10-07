import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <>
        <Button
          className="navbar-container"
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          Showcases
        </Button>
        <Menu
          className="navbar-container"
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem>
            <Link
              className="navbar-link"
              onClick={handleClose}
              to="keypad-showcase"
            >
              Keypad showcase
            </Link>
          </MenuItem>

          <MenuItem>
            <Link
              className="navbar-link"
              onClick={handleClose}
              to="pbcomps/media-page"
            >
              Link to media-page
            </Link>
          </MenuItem>
        </Menu>
      </>
      <p>{t('key')}</p>
      <p>Test page for comps</p>
    </>
  );
};
