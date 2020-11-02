import React from 'react';
import styled from 'styled-components';
import DistributorList from '../components/DistributorList';
import SearchArea from '../components/SearchArea';

const HowItWorks = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    flex-wrap: wrap;
    margin: 20px 5%;
    box-sizing: border-box;
    flex-direction: column;

    h2{
        width: 100%;
        text-align: center;
        font-size: 32px;
        font-weight: 500;
        color: #333;
    }

    div{
        display: flex;
        text-align: center;
        flex-direction: column;
        width: 100%;
        align-items: center;

        h3 {
            color: #333;
            font-size: 24px;
            margin: 0px;
            font-weight: 400;
        }

        p{
            color: #666;
            font-size: 16px;
            line-height: 33px;
        }

        img{
            width: 112px;
            height: 112px;
        }
    }

    @media(min-width:770px) {
        flex-direction: row;

        div{
            width: 33%;
        }

        h3 {
            margin: 20px;
        }
    }
`

const Home = ({ }) => {
    return(
        <>
            <SearchArea />
            <HowItWorks>
                <h2>Como funciona o Zé Delivery?</h2>
                <div>
                    <img 
                        src="https://courier-images-web.imgix.net/static/img/delivery-man.png?auto=compress,format&fit=max&w=112&h=undefined&dpr=2&fm=png" 
                        alt="Onde você estiver"
                    />
                    <h3>Onde você estiver</h3>
                    <p>Achamos as bebidas geladinhas na sua área e levamos até você!</p>
                </div>
                <div>
                    <img 
                        src="https://courier-images-web.imgix.net/static/img/welcome_how_it_works_02.png?auto=compress,format&fit=max&w=112&h=undefined&dpr=2&fm=png" 
                        alt="Favoritas"
                    />
                    <h3>Só as favoritas</h3>
                    <p>Você pode escolher entre cervejas, vinhos, água, energéticos, refrigerantes, salgadinhos e até gelo!</p>
                </div>
                <div>
                    <img 
                        src="https://courier-images-web.imgix.net/static/img/double_cellphone_greeting.png?auto=compress,format&fit=max&w=112&h=undefined&dpr=2&fm=png" 
                        alt="Facilite seu brinde"
                    />
                    <h3>Facilite seu brinde</h3>
                    <p>Suas bebidas chegam geladinhas e super rápidas, prontas para brindar!</p>
                </div>
            </HowItWorks>
        </>
    )
}

export default Home;