import '../Styles/welcoming.css';

export function Welcoming() {

    return (
        <div className='main-container '>

            <div className='divs'>
                <h1>أهلاً</h1>
                <input className='name-input' type='text' placeholder=' أدخل اسمك هنا...'></input>
            </div>

            <div className='divs'>
                <button type='submit' className='btn btn-outline-info btn-lg start-btn'>ابدأ</button>
            </div>

        </div>
    );

}