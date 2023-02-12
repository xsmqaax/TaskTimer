import '../Styles/mainContainer.css';
import { newTask } from './NewTask';
import {TaskBoard} from './TaskBoard';
export function MainContainer() {
    const name = "سعد"
    return (
        <div className='main'>
            <div className='header-name'><h1>مهام {name} اليومية</h1></div>
            <div className='grid-container'>
                <div className='for-newTask'>   <newTask /> </div>
                <div className='for-TaskBoard'>   <TaskBoard /> </div>
            </div>
        </div>
    );
}