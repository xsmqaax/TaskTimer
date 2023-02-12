import '../Styles/newTask.css';

export function NewTask() {
    return (
        <div className="main">
            <div className="newTask-header">
                <button className="head-btn">مهمة جديدة</button>
            </div>
            <hr></hr>
            <div className="form-container">
                <form>
                    <div className="form-div">
                        <label>إسم المهمة</label>
                        <br/>
                        <input type='text'></input>

                    </div>

                    <div className="form-div">
                        <label>التفاصيل</label>
                        <br/>
                        <input type='text'></input>
                        
                    </div>

                    <div className="form-div">
                        <label>درجة الأهمية</label>
                        <br/>
                        <fieldset>
                            <input type='radio' id='easy'></input>
                            <label>عادي</label>
                            <input type='radio' id='mid'></input>
                            <label>مهم</label>
                            <input type='radio' id='hard'></input>
                            <label>مهم جداً</label>

                        </fieldset>
                    </div>
                    <div className="form-div">
                        <label>إضافة مؤقت</label>
                        <br/>
                    </div>

                    <div className="form-div">
                        <button className="add-task-btn">إضافة مهمة</button>
                        <button className="clear-btn">clear</button>
                    </div>
                </form>
            </div>
        </div>
    );
}