import './Card.css';

export const Card = ({data, cardData, active}) => {

let cardClass = 'card';
if(active === data.id) cardClass += ' cardActive';

    return (
                <button className={cardClass} type='button' onClick={() => cardData(data)}>
                    <h3 className='title'>{data.nom}</h3>
                        <div className='coupleData'>
                            <p>Region :</p>
                            <p>{data.region}</p>
                        </div>
                        {data.balisee ? <p>Chemin balisee </p> : null}
                </button>
    )
}
