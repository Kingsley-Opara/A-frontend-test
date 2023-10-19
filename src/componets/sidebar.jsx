import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import {sidebarClasses, menuClasses} from 'react-pro-sidebar'
import { Typography, Container } from '@mui/material';
import logo from '../images/logo.jpg'
// import React from 'react'

function SidebarComponents() {
  return (
    <>
        <Sidebar
            rootStyles={{
                [`.${sidebarClasses.container}`]: {
                    backgroundColor: '#363740',
                    color: 'gray'
                },
            }}
            className='h-[200vh] '
            width='320px'
            toggled = {true}
            collapsed = {true}
        >
            <Menu
                
                rootStyles={{
                    [`.${menuClasses.container}`]: {
                        color: 'white'
                    },
                }}

            className=''>
                
                <Container className='mb-[3rem] mt-[0rem] pt-6 h-fit flex flex-col'>
                    <div className='flex flex-row space-x-6'>
                        <div className='relative '>
                            <div className='w-12 h-12 rounded-3xl bg-[#3751FF]'></div>
                            <Typography 
                            className='text-lg text-white absolute top-[-0.2rem] left-2' 
                            variant='h3'>D</Typography>                     
                        </div>
                        <Typography className='text-sm pt-3' variant='h5'>DashBoard Kit</Typography>
                    </div>
                </Container>

                

            </Menu>
            <Menu
                menuItemStyles={{
                button: {
                    // the active class will be added automatically by react router
                    // so we can use it to style the active menu item
                    [`&.active`]: {
                    backgroundColor: 'black',
                    color: '#b6c8d9',
                    },
                },
                }}
            >
                <SubMenu label="Charts">
                    <MenuItem> Pie charts </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                </SubMenu>
                <MenuItem component={<Link to="/home" />}> Documentation</MenuItem>
                <MenuItem component={<Link to="/home" />}> Calendar</MenuItem>
                <MenuItem component={<Link to="/home" />}> E-commerce</MenuItem>
            </Menu>
            <Menu
                menuItemStyles={{
                button: {
                    // the active class will be added automatically by react router
                    // so we can use it to style the active menu item
                    [`&.active`]: {
                    backgroundColor: 'black',
                    color: '#b6c8d9',
                    },
                },
                }}
            >
                <SubMenu label="Charts">
                    <MenuItem> Pie charts </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                </SubMenu>
                <MenuItem component={<Link to="/home" />}> Documentation</MenuItem>
                <MenuItem component={<Link to="/home" />}> Calendar</MenuItem>
                <MenuItem component={<Link to="/home" />}> E-commerce</MenuItem>
            </Menu>
        </Sidebar>;
        <h1 className='text-white'>Hello</h1>
    </>
  )
}

export default SidebarComponents
