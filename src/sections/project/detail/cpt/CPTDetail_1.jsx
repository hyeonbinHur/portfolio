/* eslint-disable react/no-unescaped-entities */
import Cpt from '../../../../assets/projects/cpt-logo.png';
import Background from '../../../../assets/CPT/cpt-base.png';

export default function CPTDetail_1() {
    return (
        <div className="detail">
            <header className="detail--header__main">
                <img
                    src={Cpt}
                    alt="Capston project management logo"
                    className="cpt-detail--logo"
                />
                &#124; RMIT Students' capstone project management system
            </header>

            <header className="detail--header__sub">
                This web service is for the RMIT Capstone project that required
                interaction between students, schools, and industry.
            </header>

            <h3 style={{ marginBottom: '2rem', fontSize: '2rem' }}>
                Development Environment
            </h3>

            <table className="detail--table">
                <tbody>
                    <tr>
                        <th>Development Period</th>
                        <td>Mar.2023 ~ May.2023 (3 Months)</td>
                    </tr>
                    <tr>
                        <th>Contributors</th>
                        <td>Group of 4</td>
                    </tr>
                    <tr>
                        <th>Role</th>
                        <td>Front-End (Personal pages, Student pages) /</td>
                        <td>Back-End (Student / Admin)</td>
                    </tr>
                    <tr>
                        <th>Main technologies</th>
                        <td>Spring Boot, HTML/CSS/JavaScript</td>
                    </tr>
                    <tr>
                        <th>Database</th>
                        <td>PostgreSQL</td>
                    </tr>
                    <tr>
                        <th>Cloud Service</th>
                        <td>AWS-RDS</td>
                    </tr>
                    <tr>
                        <th>Authentication</th>
                        <td>JWT</td>
                    </tr>
                    <tr>
                        <th>Front-End frameworks</th>
                        <td>Bootstrap</td>
                    </tr>
                </tbody>
            </table>
            <img
                src={Background}
                alt="Cpastone project detail page background image"
                className="detail--background"
            />
        </div>
    );
}
