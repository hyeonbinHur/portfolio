import Architecture from '../../../../assets/projects/pk-architecture.png';
export default function PocketDetail_2() {
    return (
        <div
            style={{
                display: 'flex',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <img
                src={Architecture}
                alt="Pocket project architecture"
                style={{
                    width: '100%',
                }}
            />
        </div>
    );
}
