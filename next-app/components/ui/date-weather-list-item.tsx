import CloudIcon from '@mui/icons-material/Cloud';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

const DateWeatherListItem = () => {
    return (
        <ListItem>
            <ListItemButton className='flex justify-between items-center w-full'>
                <ListItemText primary="Today"/>
                <ListItemText className='flex flex-row justify-center items-center opacity-60' primary="15&deg;C"/>
                <ListItemText className='flex flex-row justify-center items-center' primary="25&deg;C"/>
                <ListItemIcon className='flex flex-row justify-end items-center'>
                    <CloudIcon />
                </ListItemIcon>
            </ListItemButton>
        </ListItem>
    )
}

export default DateWeatherListItem;