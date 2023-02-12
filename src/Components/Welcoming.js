import '../Styles/welcoming.css';

export function Welcoming() {

    return (
        <div className='main-container container-fluid'>

            <div className='logo-div container-sm'>
                <img ></img>
            </div>

            <div className='divs container-sm'>
                <h1>أهلاً</h1>
                <input className='name-input' type='text' placeholder=' أدخل اسمك هنا...'></input>
            </div>

            <div className='divs container-sm'>
                <button type='submit' className='start-btn'>ابدأ</button>
            </div>

        </div>
    );

}