import '../Styles/taskBoard.css';
import { TimerCard } from './TimerCard';
import { DetailCard } from './DetailCard';

export function TaskBoard(){
    const taskName = "إسم المهمة هنا"

    return(
        <div className='board-container shadow p-3 mb-5 bg-body-tertiary rounded main'>
            <div className='top-row row'>
                <div className='col'> {taskName} </div>
            </div>
            <div className='main-row row'>

                <div className='right-col col-12 col-md-3'> <TimerCard /> </div>
                <div className='left-col col-12 col-md-9'> <DetailCard /> </div>
            </div>

            <div className='main-row row'>

                <div className='right-col col-12 col-md-3'> 
                    <button type="button" className="tem-start-btn btn btn-outline-warning"> إيقاف مؤقت</button>
                 </div>
                <div className='left-col col-12 col-md-3'>  
                    <button type="button" className="stop-end-btn btn btn-danger"> إيقاف</button>
                </div>
            </div>
        </div>
    );
}