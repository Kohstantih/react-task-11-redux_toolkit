import { Button, Flex, Image } from "antd";

import { useAppDispatch } from "../../hooks/redux";
import { favoritesSlice } from "../../redux/reducers/favoritesSlice";

import { TFilmsListItemProps } from "../../types/TFilmsListItemProps";
import { useNavigate } from "react-router-dom";
import { changeActiveStatus } from "../../redux/reducers/activeFIlmSlice";


export default function FilmsListItem({ filmObj, icon }: TFilmsListItemProps) {
    const { Title, Poster, Year, imdbID } = filmObj;
    const navigator = useNavigate();

    const { changeFavoritesStatus } = favoritesSlice.actions;
    const dispatch = useAppDispatch();
    
    return (
        <Flex
            justify='space-between' className="film-item_wrapper"
            onClick={(e) => {
                const target = e.target as HTMLElement
                if (target.closest('button')) return;
                dispatch(changeActiveStatus())
                navigator(`/film/${imdbID}`)
            }}>
            <Flex>
                <Image
                    width={100}
                    src={Poster}
                />
                <Flex
                    style={{marginLeft: '30px'}}
                    vertical={true}
                    justify='center'
                >
                    <h2 style={{marginBottom: '20px'}}>{Title}</h2>
                    <p style={{ textAlign: 'left', fontWeight: 'bold' }}>Год выпуска: <span>{Year}</span></p>
                </Flex>
            </Flex>
            <Button
                onClick={() => dispatch(changeFavoritesStatus(filmObj))}
                style={{ alignSelf: 'center', marginRight: '30px' }}
                type="primary"
                icon={icon}
            />
        </Flex>
    )
}
