/* eslint-disable react/no-unescaped-entities */
import NG from '../../../../assets/projects/ng.png';
import Background from '../../../../assets/Ng/ng-base.png';
export default function NGDetail_1() {
    return (
        <div className="ng-detail">
            <header className="ng-detail--header__main">
                <img
                    src={NG}
                    alt="Name Gacha logo"
                    className="ng-detail--logo"
                />
                &#124; Ai-powered chatting Service
            </header>
            <header className="ng-detail--header__sub">
                This is a web service where AI suggests names for identifiers to
                developers who struggle with naming.
            </header>
            <h3 style={{ marginBottom: '2rem', fontSize: '2rem' }}>
                Development Environment
            </h3>

            <table className="detail--table">
                <tbody>
                    <tr>
                        <th>Development Period</th>
                        <td>May.2024 ~ July.2024 (2 Months)</td>
                    </tr>
                    <tr>
                        <th>Main technologies</th>
                        <td>React, JS, SCSS, AWS, OpenAI</td>
                    </tr>
                    <tr>
                        <th>Database</th>
                        <td>PostgreSQL</td>
                    </tr>
                    <tr>
                        <th>Cloud Service</th>
                        <td>AWS</td>
                        <td> AWS-RDS, AWS-API Gateway, AWS-Lambda (Node.js)</td>
                    </tr>
                    <tr>
                        <th>Authentication</th>
                        <td>JWT</td>
                    </tr>
                    <tr>
                        <th>State management</th>
                        <td>Redux, ContextAPI</td>
                    </tr>
                    <tr>
                        <th>Data Fetching tool</th>
                        <td>React Query, Axios</td>
                    </tr>
                    <tr>
                        <th>Additional library</th>
                        <td>tostify, error boundary</td>
                    </tr>
                    <tr>
                        <th>IDE</th>
                        <td>Visual Studio, Postman</td>
                    </tr>
                </tbody>
            </table>
            <img
                src={Background}
                alt="Namge Gacha Detail page background image"
                className="detail--background"
            />
        </div>
    );
}
