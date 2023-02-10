import '../Styles/welcoming.css';

export function Welcoming() {

    return (
        <div className='main-container'>

            <div className='divs'>
                <h1>أهلاً</h1>
                <input type='text' placeholder=' أدخل اسمك هنا...'></input>
            </div>

            <div className='divs'>
                <button type='submit'>ابدأ</button>
            </div>

        </div>
    );

}