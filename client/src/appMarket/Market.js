import './market.css';
import {useEffect, useState} from "react";
import axios from "axios";
import {API_URL} from "../index";
import {HandySvg} from 'handy-svg';


export const IconValentine = () => (
    <HandySvg
        src={"icons/valentine.svg"}
        className="icon"
        width="256"
        height="256"
    />
);

export const IconCoin = () => (
    <HandySvg
        src={"icons/coin.svg"}
        className="icon"
        width="64"
        height="64"
    />
);

export const IconArrow = () => (
    <HandySvg
        src={"icons/arrow.svg"}
        className="icon"
        width="24"
        height="24"
    />
);

export const IconHand = () => (
    <HandySvg
        src={"icons/hand.svg"}
        className="icon"
        width="64"
        height="64"
    />
);

export const IconGift = () => (
    <HandySvg
        src={"icons/gift.svg"}
        className="icon"
        width="64"
        height="64"
    />
);

export const IconCook = () => (
    <HandySvg
        src={"icons/cook.svg"}
        className="icon"
        width="64"
        height="64"
    />
);

export const IconTV = () => (
    <HandySvg
        src={"icons/tv.svg"}
        className="icon"
        width="64"
        height="64"
    />
);

export const IconWalk = () => (
    <HandySvg
        src={"icons/walk.svg"}
        className="icon"
        width="64"
        height="64"
    />
);

export const Icon18 = () => (
    <HandySvg
        src={"icons/18.svg"}
        className="icon"
        width="64"
        height="64"
    />
);

export const IconCart1 = () => (
    <HandySvg
        src={"icons/cart1.svg"}
        className="icon"
        width="64"
        height="64"
    />
);

export const IconCart2 = () => (
    <HandySvg
        src={"icons/cart2.svg"}
        className="icon"
        width="64"
        height="64"
    />
);

export const IconCart3 = () => (
    <HandySvg
        src={"icons/cart3.svg"}
        className="icon"
        width="64"
        height="64"
    />
);

export const IconBroom = () => (
    <HandySvg
        src={"icons/broom.svg"}
        className="icon"
        width="64"
        height="64"
    />
);

export const IconBag = () => (
    <HandySvg
        src={"icons/bag.svg"}
        className="icon"
        width="64"
        height="64"
    />
);

export const IconPlane = () => (
    <HandySvg
        src={"icons/plane.svg"}
        className="icon"
        width="64"
        height="64"
    />
);

export const IconLamp = () => (
    <HandySvg
        src={"icons/lamp.svg"}
        className="icon"
        width="64"
        height="64"
    />
);

export const IconParty = () => (
    <HandySvg
        src={"icons/party.svg"}
        className="icon"
        width="64"
        height="64"
    />
);

export const IconCandle = () => (
    <HandySvg
        src={"icons/candle.svg"}
        className="icon"
        width="64"
        height="64"
    />
);

export const IconDialog = () => (
    <HandySvg
        src={"icons/dialog.svg"}
        className="icon"
        width="64"
        height="64"
    />
);

const Market = () => {
    const [content, setContent] = useState([])

    useEffect(() => {
        getContent()
    }, [])

    const getContent = (data) => {
        axios.get(API_URL).then(data => setContent(data.data))
    }

    const resetState = () => {
        getContent();
    };

    return (
        <main>

            {/*поздравление*/}
            <IconValentine/>
            <div className={"hooray"}>
                <h2>Ника с Днем Святого Валентина!</h2>
                <h4>*Нихуя себе, почитаем потом почему он Cвятой</h4>
            </div>

            {/*описание сайта*/}
            <div className={"description"}>
                <hr/>
                <h3>Этот <span>ебейший сайт</span> - это твой <span>ежегодный бонус</span> за старания и осуществление
                    жизненных амбиций!</h3>
            </div>

            {/*количество монет*/}
            <div className={"economy"}>
                <h1>142</h1>
                <IconCoin/>
                <IconArrow/>
                <h4>Это кстати монеты, можешь потратить их в маркете ниже!</h4>
            </div>

            {/*товары маркета*/}
            <div className={"goods"}>

                <button className={"good"}>
                    <IconTV/>
                    <h5>Смотрю то что мне не нравится, без угрюмой рожи и приреканий</h5>
                    <h1>1</h1>
                    <IconCoin/>
                </button>
                <button className={"good"}>
                    <IconParty/>
                    <h5>Помочь с организацией тусни для подруг</h5>
                    <h1>1</h1>
                    <IconCoin/>
                </button>
                <button className={"good"}>
                    <IconWalk/>
                    <h5>Сходить куда-нибудь лайтово</h5>
                    <h1>2</h1>
                    <IconCoin/>
                </button>
                <button className={"good"}>
                    <IconGift/>
                    <h5>2 внезапных подарка (не скажу когда)</h5>
                    <h1>3</h1>
                    <IconCoin/>
                </button>
                <button className={"good"}>
                    <IconHand/>
                    <h5>30мин чуханья спинки</h5>
                    <h1>3</h1>
                    <IconCoin/>
                </button>
                <button className={"good"}>
                    <IconBroom/>
                    <h5>Ген-уборка</h5>
                    <h1>3</h1>
                    <IconCoin/>
                </button>
                <button className={"good"}>
                    <IconCook/>
                    <h5>Вкусни ужын</h5>
                    <h1>4</h1>
                    <IconCoin/>
                </button>
                <button className={"good"}>
                    <Icon18/>
                    <h5>Сходить куда-нибудь жёстко</h5>
                    <h1>5</h1>
                    <IconCoin/>
                </button>
                <button className={"good"}>
                    <IconCart1/>
                    <h5>Рандом покупка с WB до 1000</h5>
                    <h1>6</h1>
                    <IconCoin/>
                </button>
                <button className={"good"}>
                    <IconLamp/>
                    <h5>Что-то новое вдвоём</h5>
                    <h1>8</h1>
                    <IconCoin/>
                </button>
                <button className={"good"}>
                    <IconCandle/>
                    <h5>Жёстко романтический вечер</h5>
                    <h1>8</h1>
                    <IconCoin/>
                </button>
                <button className={"good"}>
                    <IconCart2/>
                    <h5>Рандом покупка с WB до 5000</h5>
                    <h1>14</h1>
                    <IconCoin/>
                </button>
                <button className={"good"}>
                    <IconCart3/>
                    <h5>Рандом покупка с WB до 10000</h5>
                    <h1>22</h1>
                    <IconCoin/>
                </button>
                <button className={"good"}>
                    <IconBag/>
                    <h5>Лайтовое путешествие</h5>
                    <h1>35</h1>
                    <IconCoin/>
                </button>
                <button className={"good"}>
                    <IconPlane/>
                    <h5>Путешествие</h5>
                    <h1>280</h1>
                    <IconCoin/>
                </button>
                <button className={"good"}>
                    <IconDialog/>
                    <h5>Ты оказываешься права в споре     <h6>*я устанавливаю цену</h6></h5>
                    <h1>?</h1>
                    <IconCoin/>
                </button>

            </div>

            {/*FAQ*/}
            <div className={"faq"}>
                <h1>FAQ:</h1>
                <div className={"question"}>
                    <h4>Как быстро происходит исполнение заказа?</h4>
                    <h4 className={"bltxt"}>> От 4 часов - до месяца. (Они приходят мне кое-где)</h4>
                </div>
                <div className={"question"}>
                    <h4>Как начисляются монеты?</h4>
                    <h4 className={"bltxt"}>> Раз в год, за что конкретно - неважно, могу лишь сказать, что иногда цены индексируются и иногда монеты могут прийти +- позже.</h4>
                </div>
                <div className={"question"}>
                    <h4>Я не могу найти любимый товар!</h4>
                    <h4 className={"bltxt"}>> Обратись ко мне -  я его вероятно добавлю.</h4>
                </div>
                <div className={"question"}>
                    <h4>Могу ли я копить монеты?</h4>
                    <h4 className={"bltxt"}>>  Да!</h4>
                </div>
            </div>

            {/*подвал*/}
            <footer>
                <div className={"contacts"}>
                    <h4>личный - 89217589160</h4>
                    <h4>рабочий - 89939589160</h4>
                    <h4>aleksandr.kopeykin@gmail.com</h4>
                </div>
                <h4 className={"original"}>AlkoKovad - orginal content</h4>
            </footer>

        </main>
    )
}

export default Market;