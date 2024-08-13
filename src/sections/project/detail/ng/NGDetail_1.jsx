import NG from '../../../../assets/projects/ng.png';

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
                이름 짓기를 어려워하는 개발자를 위한 ai가 이름을 지어주는 웹
                서비스
            </header>

            <section className="ng-detail--section__main">
                <ul>
                    <li>
                        <span>개발 기간</span> <span>언제 ~ 언제 (2달)</span>
                    </li>
                    <li>
                        <span>개발 인원</span>
                        <span>1명 (Personal project)</span>
                    </li>
                </ul>
            </section>

            <section className="ng-detail--section__sub">
                <header>개발 환경</header>
                <ul>
                    <li>React, JS, SCSS, AWS, OpenAI</li>
                    <li>
                        <span>Database</span> <span>PostgreSQL</span>
                    </li>
                    <li>
                        <span>Cloud Service</span> <span>AWS</span>
                        AWS-RDS, AWS-API Gateway, AWS-Lambda (Node.js)
                    </li>
                    <li>
                        <span>Authentication</span>
                        <span>JWT</span>
                    </li>
                    <li>
                        <span>State management</span>
                        <span>Redux, ContextAPI</span>
                    </li>
                    <li>
                        <span>Data Fetching tool</span>{' '}
                        <span>React Query, Axios</span>
                    </li>
                    <li>
                        <span>Additional library</span>
                        <span>tostify, error boundary</span>
                    </li>
                    <li>
                        <span>IDE</span> <span> GitHub</span>
                    </li>
                </ul>
            </section>
            {/* <section>some Images</section> */}
        </div>
    );
}
