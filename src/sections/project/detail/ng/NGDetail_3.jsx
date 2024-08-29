import ERD from '../../../../assets/projects/ng-erd.png';

export default function NGDetail_3() {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
            }}
        >
            <img
                style={{ maxHeight: '100%', maxWidth: '60%' }}
                src={ERD}
                alt="Name Gacha erd"
                className="detail--erd"
            />
        </div>
    );
}
