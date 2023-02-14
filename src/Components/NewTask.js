import '../Styles/newTask.css';

export function NewTask() {
    return (
       <div className='make-task container-sm'>
            <div className="mb-3 tasks-top-label"><h1>مهمة جديدة</h1></div>
            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label">اسم المهمة</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="" />
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label">التفاصيل</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="" />
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label">الوقت</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="" />
            </div>
            
            <div className="mb-3">
            <button type="button" className="btn btn-success">إضافة</button>
            <button type="button" className="btn btn-outline-secondary">مسح</button>
            </div>
       </div>
    );
}