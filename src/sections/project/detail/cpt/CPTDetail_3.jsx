import ClassDiagram from '../../../../assets/projects/cpt-cd.png';
export default function CPTDetail_3() {
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
                style={{ width: '100%' }}
                src={ClassDiagram}
                alt="Capstone project class diagram"
            />
        </div>
    );
}
