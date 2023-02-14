import '../Styles/timerCard.css';
export function TimerCard() {
    return (
        <div className="main-div shadow p-3 mb-5 bg-body-tertiary rounded">

            
            <div className='top-row row '>
                <div className='col counter-min'> ROW 1</div>
            </div>


            <div className='top-row row'>
                <div className='col total-min'> 30 min</div>
            </div>

        </div>
    );
}