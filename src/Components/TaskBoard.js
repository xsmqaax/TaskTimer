import '../Styles/taskBoard.css';

export function TaskBoard(){
    

    return(
        <div className='board-container shadow p-3 mb-5 bg-body-tertiary rounded'>
            <div className='top-row row'>
                <div className='col'>#3<img src='./Images/tasks-icon.png'></img></div>
            </div>
            <div className='main-row row'>

                <div className='right-col col-12 col-md-3'> #4  </div>
                <div className='left-col col-12 col-md-9'> #5 </div>
            </div>

            <div className='main-row row'>

                <div className='right-col col-12 col-md-3'>  </div>
                <div className='left-col col-12 col-md-9'>   </div>
            </div>
        </div>
    );
}