import Pocket from '../../../../assets/projects/pocket.png';
import Background from '../../../../assets/Pocket/pk-base.png';

export default function PocketDetail_1() {
    return (
        <div className="pocket-detail">
            <header className="pocket-detail--header__main">
                <img
                    src={Pocket}
                    alt="Pocket logo"
                    className="pocket-detail--logo"
                />
                &#124; Second hand trading service for poeple living in
                Melbourne
            </header>
            <header className="pocket-detail--header__sub">
                The webservice for trading second-hand goods and finding jobs,
                hous, and friends through real-time chatting and posts.
            </header>
            <h3 style={{ marginBottom: '2rem', fontSize: '2rem' }}>
                Development Environment
            </h3>

            <table className="detail--table">
                <tbody>
                    <tr>
                        <th>Development Period</th>
                        <td>March.2024 ~ May.2024 (2 Months)</td>
                    </tr>
                    <tr>
                        <th>Main technologies</th>
                        <td>React, JS, Tailwind CSS, Firebase</td>
                    </tr>
                    <tr>
                        <th>Database</th>
                        <td>Firebase firestore, storage</td>
                    </tr>
                    <tr>
                        <th>Cloud Service</th>
                        <td>Firebase</td>
                    </tr>
                    <tr>
                        <th>Authentication</th>
                        <td>
                            Firebase email, face book, google authentication
                        </td>
                    </tr>
                    <tr>
                        <th>State management</th>
                        <td>Redux, ContextAPI</td>
                    </tr>
                    <tr>
                        <th>Data Fetching tool</th>
                        <td>Firebase collection</td>
                    </tr>
                    <tr>
                        <th>Additional library</th>
                        <td>uuid, react google-map, react-hot-toast</td>
                    </tr>
                    <tr>
                        <th>IDE</th>
                        <td>Visual Studio</td>
                    </tr>
                </tbody>
            </table>
            <img
                src={Background}
                alt="Pocket Detail page background image"
                className="detail--background"
            />
        </div>
    );
}
