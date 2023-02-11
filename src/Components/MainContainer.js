import '../Styles/mainContainer.css';
export function MainContainer() {
    const name = "سعد"
    return (
        <div className='main'>
            <div className='header-name'><h1>مهام {name} اليومية</h1></div>
            <div className='grid-container'>
                <div className='for-newTask col'>NewTasks</div>
                <div className='for-TaskBoard col'>TaskBoard</div>
            </div>
        </div>
    );
}