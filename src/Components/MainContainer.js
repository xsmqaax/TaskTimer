import '../Styles/mainContainer.css';
export function MainContainer() {
    const name = "سعد"
    return (
        <div className='main'>
            <div className='header-name'>مهام {name} اليومية</div>
            <div className='grid-container'>
                <div className='for-newTask'>NewTasks</div>
                <div className='for-TaskBoard'>TaskBoard</div>
            </div>
        </div>
    );
}