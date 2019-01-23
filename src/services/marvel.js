// Api
import Api from '../utils/api';

class MarvelService {
    static getCharacters(timestamp, publicKey, hash, nameStartsWith, limit, offset) {
        return Api.get(`characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}${nameStartsWith ? `&nameStartsWith=${nameStartsWith}` : ''}${limit ? `&limit=${limit}` : ''}${offset ? `&offset=${offset}` : ''}`);
    }

    static getCharacter(timestamp, idCharacter, publicKey, hash) {
        return Api.get(`characters/${idCharacter}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`);
    }
}

export default MarvelService;