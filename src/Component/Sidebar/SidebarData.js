import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';

export const sidebarData = [
    {
        key: 'sb1',
        title: 'Home',
        icon: <HomeIcon fontSize='small'/>,
        path: '/home',
    },
    {
        key: 'sb2',
        title: 'Report',
        icon: <AssessmentIcon fontSize='small'/>,
        path: '',
        subNav: [
            {
                key: 'sbr1',
                title: 'SO Visit Report',
                path: 'report/so-visit',
            },
            {
                key: 'sbr2',
                title: 'Customer Visit Report',
                path: 'report/customer-visit',
            },
            {
                key: 'sbr3',
                title: 'Employee Road Map',
                path: 'report/emp-road-map',
            },
            {
                key: 'sbr4',
                title: 'Current Location Tracker',
                path: 'report/current-location-tracker',
            },
            {
                key: 'sbr5',
                title: 'Stock Sales Report',
                path: 'report/stock-sales',
            },
            {
                key: 'sbr6',
                title: 'Punch In/Out Report',
                path: 'report/punch-in-out',
            },
            {
                key: 'sbr7',
                title: 'Miles Summary',
                path: 'report/miles-summary',
            },
            {
                key: 'sbr8',
                title: 'Road Map(Miles)',
                path: 'report/miles-road-map',
            }
        ]
    },
    {
        key: 'sb3',
        title: 'Settings',
        icon: <SettingsIcon fontSize='small'/>,
        path: '',
        subNav:[
            {
                key: 'sbs1',
                title: 'Customers',
                path: 'settings/customers',
            },
            {
                key: 'sbs2',
                title: 'Employee',
                path: 'settings/employee',
            },
            {
                key: 'sbs3',
                title: 'Zone',
                path: 'settings/zone',
            },
            {
                key: 'sbs4',
                title: 'Region',
                path: 'settings/region',
            },
            {
                key: 'sbs5',
                title: 'Depot',
                path: 'settings/depot',
            },
            {
                key: 'sbs6',
                title: 'Territory',
                path: 'settings/Territory',
            },
            {
                key: 'sbs7',
                title: 'Calender',
                path: 'settings/Calender',
            },
            {
                key: 'sbs8',
                title: 'Product',
                path: 'settings/product',
            },
            {
                key: 'sbs9',
                title: 'Product Price',
                path: 'settings/product-price',
            },
            {
                key: 'sbs10',
                title: 'Task',
                path: 'settings/task',
            },
            {
                key: 'sbs11',
                title: 'Plan Duration',
                path: 'settings/plan-duration',
            }
        ]
    }
]