import { Flex, Input, Spin, message } from "antd";
import { StarOutlined } from "@ant-design/icons";

import FilmsList from "../FilmsList/FilmsList";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchSearchFilms } from "../../redux/reducers/searchListSlice";

const { Search } = Input;

export default function Home() {
    const favorites = useAppSelector((state) => state.favorites);
    const { films, isLoading, error } = useAppSelector((state) => state.search);
    const dispatch = useAppDispatch();

    const [lastFavoritesLength, setLastFavoritesLength] = useState(favorites.length);
    const [messageApi, contextHolder] = message.useMessage();

    useEffect(() => {
        if (favorites.length > lastFavoritesLength) {
            messageApi.open({
                type: 'success',
                content: 'Фильм добавлен в избранное',
              })
        } else if (favorites.length < lastFavoritesLength) {
            messageApi.open({
                type: 'error',
                content: 'Фильм удален из избранного',
              })
        }

        setLastFavoritesLength(favorites.length);
    }, [favorites.length, lastFavoritesLength, messageApi]);

    return (
        <Flex vertical={true} >
            <Search
                style={{ width: '400px', margin: 'auto', marginBottom: '30px'}}
                placeholder="Введите название фильма..."
                onSearch={(search) => {dispatch(fetchSearchFilms(search))}}
                enterButton='SEARCH'
            />
            {contextHolder}
            {isLoading && <Spin tip="Loading..." size="large"><div className="content" /></Spin>}
            {error && <p>{error}</p>}
            <FilmsList list={films} icon={<StarOutlined />} />
        </Flex>
    )
}