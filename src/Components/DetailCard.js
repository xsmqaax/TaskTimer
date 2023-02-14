import '../Styles/detailCard.css';
export function DetailCard(){

    const details = "السلام عليكم هنا التفاصيل";
    return (
        <div className="main-div shadow p-3 mb-5 bg-body-tertiary rounded">

            
        <div className='top-row row '>
            <div className='col datail-title'> التفاصيل</div>
        </div>


        <div className='top-row row'>
            <div className='col detail-text'> {details} </div>
        </div>

    </div>
    );
}