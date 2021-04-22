import React from 'react';
import './styles/app.scss';

const App = () => {
    return (<div className='newspaper'>
        <header>
            <h1>Springfield Shopper</h1>
            <h2 className='info'>
                <span>DAILY NEWS</span>
                <span>35$</span>
            </h2>
            <h1 className='title'>
                <strong>SIMPSONS SCAM</strong>
                <br />
                <strong>SPRINGFIELD</strong>
            </h1>
        </header>
        <main>
            <section className='text'>
                <h2><span>Angry Mob</span>
                <br />
                <span>Mulls Options</span></h2>
                <article>
                    <p className='p1'>Lorem Ipsum is simply dummy text of the printing ans typesetting industry. Lorem Ipsum has been the industry's standart dummy text ever since the 1500s, when an unknow printer took a falley of type and scrambled it to make a type specimen book</p>
                    <p className='p2'>Lorem Ipsum is simply dummy text of the printing ans typesetting industry. Lorem Ipsum has been the industry's standart dummy text ever since the 1500s, when an unknow printer took a falley of type and scrambled it to make a type specimen book</p>
                </article>
            </section>
            <section className='image'>
                <img src='https://i.ibb.co/f8SdZ9Y/Screen-Shot-2021-04-09-at-2-28-04-PM.png' alt='La familia simpson' />
                <p>Lorem Ipsum is simply dummy text of the printing ans typesetting industry. Lorem Ipsum has been the industry's</p>
            </section>
        </main>
    </div>);
}

export default App;