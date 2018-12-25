import React, { Component } from 'react';
import { connect } from 'react-redux'
import { User } from '../components/User'
import { Page } from '../components/Page'
import './App.css';

class App extends Component {
    render () {
        const { page, user } = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Мой топ фото</h1>
                </header>
                <p className="App-intro">Здесь будут мои самые залайканые фото</p>
                <User name={user.name}/>
                <Page photos={page.photos} year={page.year}/>
            </div>
        )
    }
}

// приклеиваем данные из store
const mapStateToProps = store => {
    console.log(store) // посмотрим, что же у нас в store?
    return {
        user: store.user,
        page: store.page
    }
}

// в наш компонент App, с помощью connect(mapStateToProps)
export default connect(mapStateToProps)(App)


// функция connect, которая помогает нам получить в качестве props для компонента <App /> данные из store.

/*
Назначение функции connect вытекает из названия: подключи React компонент к Redux store.
    Результат работы функции connect - новый присоединенный компонент, который оборачивает переданный компонент.
    У нас был компонент <App />, а на выходе получился <Connected(App)>. В этом не трудно убедиться, если взглянуть в react dev tools.
*/


/*
Работа функции mapStateToProps многих вводит в ступор. В данной функции, мы хотим отрезать от нашего общего пирога (Store) только те кусочки (редьюсеры), которые нам нужны.
    Еще можно применить аналогию: мы приклеиваем в props компонента, данные из тех редьюсеров, которые нам требуются.
    А если быть более точным, то мы не только получаем в this.props.XXX данные, которым нам нужны, но мы еще и подписываемся на изменение этих данных.*/
/*
После того, как вы знаете о подписке, пора вам раскрыть еще один козырь - когда мы подписываемся только на нужные редьюсеры в компоненте,
    перерисовка происходит только в случае изменения конкретно этих данных. Если же мы бы подписались просто на весь корневой редьюсер,
    то не важно в каком бы редьюсере изменились данные - все подписанные на корневой редьюсер компоненты обновились бы*/
