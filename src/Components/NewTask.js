import '../Styles/newTask.css';

export function NewTask() {
    return (
       <div className='make-task'>
            <form className='form-container'>
                <div className='heading'>
                    <button>مهمة جديدة</button>
                </div>

                <div className='form-div'>
                    <label>إسم المهمة</label>
                    <input type='text' placeholder='إسم المهمة'></input>
                    <label>التفاصيل</label>
                    <input type='text'></input>

                </div>
            </form>
       </div>
    );
}