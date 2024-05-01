import {useState,useEffect} from 'react';
import DashboardStyled from './dashBoard.module.css'
import DashboardCards from '../dashboardCards/DashboardCards';


const Dashboard = () =>{
    return(
        <>
            <div className={DashboardStyled['dashboard-header-section']}>
                <div className={DashboardStyled['dashboard-overview-section']}>
                   <h2>Overview</h2>
                   <p>Have a bird’s eye view of all your projects</p> 
                </div>
                <div>
               <div className={DashboardStyled['dashboard-overview-button']}>
               <box-icon type='regular' name='folder-plus'></box-icon>
                Add New Project
               </div>
                </div>
            </div>
            <div className={DashboardStyled['dashboard-page-container']}>
                <div className={DashboardStyled['dashboard-cards-container']}>
                    <div className={DashboardStyled['dashboard-cards-wrapper']}>
                        <DashboardCards/>
                    </div>
                    <div className={DashboardStyled['dashboard-board-container']}>
                        <div className={DashboardStyled['dashboard-board-wrapper']}>
                            
                        </div>
                    </div>
                </div>
                <div className={DashboardStyled['']}>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>
    )
}


export default Dashboard