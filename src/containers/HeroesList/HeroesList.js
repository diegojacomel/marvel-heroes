// Modules
import React, { useEffect } from 'react';
import styled from 'styled-components';
import CryptoJS from 'crypto-js';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useStore, useAction } from 'easy-peasy';

// Components
import IsLoading from '../../components/IsLoading/IsLoading';
import Card from '../../components/Card/Card';

// Services
import { MarvelService } from '../../services';

// Keys
import { publicKey, privateKey } from '../../utils/keys';

const Cards = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-wrap: wrap;
    padding-left: 0;
`

function HeroesList() {
    const timestamp = '1';
    const infoJoined = timestamp + privateKey + publicKey;
    const hash = CryptoJS.MD5(infoJoined).toString(CryptoJS.enc.Hex);
    const marvelReducer = useStore(state => state.marvel);
    const fetchCharacters = useAction(dispatch => dispatch.marvel.fetchCharacters);
    const isItLoading = useAction(dispatch => dispatch.marvel.isItLoading);
    const offset = marvelReducer.heroes.length;
    const limit = marvelReducer.heroes.length + 18;

    const fetchData = async () => {
        const response = await MarvelService.getCharacters(timestamp, publicKey, hash, marvelReducer.partialName, limit, offset);

        isItLoading(true);

        fetchCharacters(response.data.data.results);

        isItLoading(false);
    }

    useEffect(() => {
        fetchData();

        return () => {
            isItLoading(false);
        }
    }, [marvelReducer.partialName]);

    return (
        <div>
            {marvelReducer.isLoading
                ?
                <IsLoading isLoading={marvelReducer.isLoading} centerIcon />
                :
                null
            }
            {marvelReducer.heroes && marvelReducer.heroes.length
                ?
                <InfiniteScroll
                    dataLength={limit}
                    hasMore={true}
                    loader={<IsLoading isLoading centerIcon />}
                    next={fetchData}
                >
                    <Cards>
                        {marvelReducer.heroes.map((item, index) => (
                            <Card
                                key={index}
                                name={item.name}
                                urlImage={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                                description={item.description ? item.description : "This character doesn't has description."}
                                buttonText="More details"
                                to={`/more-details?${item.id}`} />
                        ))}
                    </Cards>
                </InfiniteScroll>
                :
                null
            }
        </div>
    )
}

HeroesList.propTypes = {
    centerIcon: PropTypes.bool
}

HeroesList.defaultProps = {
    centerIcon: false
}

export default HeroesList;