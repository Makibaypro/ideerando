import './Picture.css';
import EasyHiking from "./assets/EasyHiking.jpeg"
import MediumHiking from "./assets/MediumHiking.jpeg"
import HardHiking from "./assets/HardHiking.jpeg"



export const Picture = ({ cardData }) => {
    const imageLevel = {facile: EasyHiking, moyen: MediumHiking, difficile: HardHiking};

    if(!cardData) return null

    let difficultyColor;
    switch (cardData.difficulte) {
        case 'facile':
            difficultyColor = 'easy';
            break;
        case 'moyen':
            difficultyColor = 'medium';
            break;
        case 'difficile':
            difficultyColor = 'hard';
            break;
        default:
            difficultyColor = "";
    }

    return (
        <article className={`pictureART hide ${difficultyColor}`}>
            <img src={imageLevel[cardData.difficulte ? cardData.difficulte : null]} alt='Representation of the difficulty'/>
            <dl className='list'>
                <dt>Difficulté :</dt>
                <dd>{cardData.difficulte}</dd>
                <dt>Durée :</dt>
                <dd>{cardData.duree_h} h</dd>
                <dt>Dénivelé :</dt>
                <dd>{cardData.denivele_m} m</dd>
            </dl>
        </article>
    )
}
