import Architecture from '../../../../assets/projects/ng-architecture.png';

export default function NGDetail_2() {
    return (
        <div
            className="ng-detail"
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
            }}
        >
            <img
                src={Architecture}
                alt="Name gacha page architecture"
                style={{ width: '80%' }}
            />
        </div>
    );
}
