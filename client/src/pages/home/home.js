import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./home.css";
import { faDatabase, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faCss3Alt, faGoogle, faHtml5, faNode, faReact, faTrello } from '@fortawesome/free-brands-svg-icons'


class Home extends Component {

    componentDidMount() {
        document.title = "Главная";
    }

    render() {
        return (
            <div>
                <div className="ui vertical stripe segment">
                    <div className="ui middle aligned stackable grid container">
                        <div className="row">
                            <div className="center aligned column">
                                <svg className="homepage-logo" width="200" height="221" viewBox="0 0 200 221" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M55.2562 20.8198C47.5654 3.62459 35.7749 0.907842 30.6224 1.51796C39.9638 5.29658 38.2569 4.80056 42.7571 9.17547C47.2574 13.5504 46.8312 20.8128 47.28 26.702C47.7288 32.5912 52.5174 39.2407 53.8675 40.1338C54.9477 40.8483 56.5541 40.2051 57.2223 39.7942C64.8742 33.3545 65.8645 30.6419 65.4032 30.0905C58.7999 26.419 55.8871 22.3802 55.2562 20.8198Z" fill="white"/>
                                    <path d="M79.6674 20.8198C87.3582 3.62459 99.1486 0.907842 104.301 1.51796C94.9597 5.29658 96.6667 4.80056 92.1664 9.17547C87.6661 13.5504 88.0923 20.8128 87.6435 26.702C87.1947 32.5912 82.4062 39.2407 81.056 40.1338C79.9758 40.8483 78.3694 40.2051 77.7012 39.7942C70.0493 33.3545 69.059 30.6419 69.5203 30.0905C76.1236 26.419 79.0364 22.3802 79.6674 20.8198Z" fill="white"/>
                                    <path d="M75.7971 55.0617C68.2787 58.9468 63.9345 60.9496 61.2339 59.0099C57.8817 64.0527 59.7883 67.0927 63.2851 71.5087C62.9665 66.2683 63.3189 64.9845 65.2743 65.2864C67.6225 68.5099 67.2363 76.3179 65.916 82.9204C74.3357 72.7304 73.0956 66.494 73.3715 63.9525C74.2802 64.7388 74.9363 64.9093 74.1955 70.4246C76.8301 67.7397 78.8144 61.5606 75.7971 55.0617Z" fill="white"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 123.11C0 80.5724 26.5595 44.2382 64 29.7858V30H77V25.7677C79.6282 25.149 82.2964 24.6341 85 24.2274V35.7108C84.9977 36.0724 84.9957 36.4208 84.9939 36.7567C84.9483 44.9206 84.9436 45.7634 80.5985 50.7964C77.4911 54.3957 77.4128 54.4864 76.5403 57.1378C49.4185 66.7829 30 92.6787 30 123.11C30 154.25 50.3343 180.642 78.4493 189.73C79.7212 190.33 81.3255 191.348 82.6447 193.016C84.487 195.061 84.9093 197.761 85 199.143V212.106C84.8461 213.757 84.2476 216.662 82 218.5C79.9851 220.376 76.8284 220.239 75.1816 220.006C31.9588 208.968 0 169.771 0 123.11ZM121.659 189.695C145.073 182.084 163.071 162.467 168.389 138.11H125C119.477 138.11 115 133.633 115 128.11V118.11C115 112.587 119.477 108.11 125 108.11H168.389H171H190.15C191.07 108.167 194.347 108.547 196.9 111.1C199.064 113.003 199.669 115.964 199.837 117.344C199.945 119.252 200 121.175 200 123.11C200 169.584 168.297 208.654 125.337 219.872C123.939 220.128 120.254 220.549 118 218.45C115.752 216.612 115.154 213.707 115 212.056V198.917C115.162 197.487 115.644 195.44 117 193.5C118.252 191.439 120.298 190.277 121.659 189.695Z" fill="white"/>
                                </svg>
                                <h3>Мы пришли чтобы свергнуть Google.</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="center aligned column">
                                <h1 className="logo-text">COZY GROUPS ЭТО...</h1>
                            </div>
                        </div>
                        <div className="centered row">
                            <div className="eight wide column">
                                <h1 className="ui header">СОЗДАВАЙТЕ. ОБЬЕДИНЯЙТЕСЬ. ПОСТИТЕ КОТИКОВ.</h1>
                                <h3 className="ui justified header">Наше приложение имеет полный функционал для взаимодействия с группами, удобный список ваших групп, а так же ваши любимые закреплённые группы. Присоединитесь к друзьям по коду или создайте свою! </h3>
                                <h1 className="ui header">У МЕНЯ БУДЕТ ВЛАСТЬ КОТОРАЯ И НЕ СНИЛАСЬ МОЕМУ ОТЦУ!</h1>
                                <h3 className="ui justified header">В вашей группе есть система ролей, так что вы как истинный король можете сделать себе подданых в качестве администраторов и редакторов</h3>
                            </div>
                            <div className="eight wide center aligned column">
                                <FontAwesomeIcon icon={faUsers} size='10x' color='#F3B605' /><br />
                            </div>
                        </div>
                        <div className="row">

                        </div>
                        <div className="centered row">
                            <div className="four wide center aligned column">
                                <FontAwesomeIcon icon={faGoogle} size='10x' color='#4285F4' />
                            </div>
                            <div className="four wide center aligned column">
                                <FontAwesomeIcon icon={faTrello} size='10x' color='#0076BC' />
                            </div>
                            <div className="eight wide center aligned column">
                                <h1 className="ui header">СИМБИОЗ GOOGLE КЛАССА И TRELLO </h1>
                                <h3 className="ui justified header">Мы взяли всё самое лучшее от этих приложений и подумали как было бы забавно соеденить всю эту багадельню вместе. </h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="center aligned column">
                                <div className="five wide aligned two column">
                                    <div className="row">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="center aligned column">
                                <h1 className="logo-text">СТЕК</h1>
                            </div>
                        </div>
                        <div className="centered row">
                            <div className="three wide center aligned column">
                                <FontAwesomeIcon icon={faDatabase} size='6x' color='#4CAA3D' />
                            </div>
                            <div className="three wide center aligned column">
                                <FontAwesomeIcon icon={faReact} size='6x' color='#00D1F7' />
                            </div>
                            <div className="three wide center aligned column">
                                <FontAwesomeIcon icon={faNode} size='6x' color='#88C249' />
                            </div>
                            <div className="three wide center aligned column">
                                <FontAwesomeIcon icon={faHtml5} size='6x' color='#DE5336' />
                            </div>
                            <div className="three wide center aligned column">
                                <FontAwesomeIcon icon={faCss3Alt} size='6x' color='#1E70B0' />
                            </div>
                        </div>
                        <div className="centered row">
                            <div className="sixteen wide center aligned column">
                                <h2>РАЗРАБОТАНО С ПОМОЩЬЮ СТЕКА MERN.</h2>
                                <h3 className="ui justified header" >Стек MERN - это JavaScript-стек, разработанный для упрощения процесса разработки. MERN включает в себя четыре компонента с открытым исходным кодом: MongoDB, Express, React и Node.js. Эти компоненты обеспечивают комплексную среду для работы разработчиков. Наш проект Open-Source поэтому вы можете ознакомится с ним в GitHub репозитории.</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="center aligned column">
                                <a className="ui huge button" href="https://github.com/danyavol/cozy-groups">Перейти на GitHub</a>
                            </div>
                        </div>
                        <div className={this.props.token !== null ? 'hidden' : 'row'}>
                            <div className="sixteen wide aligned center column">
                                <h1 className={this.props.token !== null ? 'hidden' : 'logo-text'}>JOIN US</h1>
                            </div>
                        </div>
                        <div className={this.props.token !== null ? 'hidden' : 'row'}>
                            <div className="center aligned column">
                                <a className={this.props.token !== null ? 'hidden' : 'ui huge button'} href="/register">Зарегистрироваться</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default withRouter(Home);

