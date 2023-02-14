import '../Styles/mainContainer.css';
import { NewTask } from './NewTask';
import { TaskBoard } from './TaskBoard';

export function MainContainer() {
    const name = "سعد"
    return (
        <div className='main container-sm'>
            
            

            <div className='top-row row'>
                <div className='col'>مهام {name} اليومية <img src='./Images/tasks-icon.png'></img></div>
            </div>
            <div className='main-row row'>

                <div className='right-col col-12 col-md-3'> <NewTask />  </div>
                <div className='left-col col-12 col-md-9'> <TaskBoard /> </div>
            </div>


        </div>
    );
}