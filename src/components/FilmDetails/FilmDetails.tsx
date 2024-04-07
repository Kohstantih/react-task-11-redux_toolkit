import { Link, useParams } from "react-router-dom";

import { RollbackOutlined } from "@ant-design/icons";
import { Button, Card, Flex, Spin } from "antd"

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useEffect } from "react";
import { changeActiveStatus, fetchFilmById } from "../../redux/reducers/activeFIlmSlice";

const { Meta } = Card;

export default function FilmDetails() {
    const { id } = useParams();
    const { film, isLoading, error } = useAppSelector((state) => state.film);
    const dispatch = useAppDispatch();

    useEffect(() => {
        {id && dispatch(fetchFilmById(id))}
    }, [dispatch, id])

    return (
        <>
            {isLoading && <Spin tip="Loading..." size="large"><div className="content" /></Spin>}
            {error && <p>{error}</p>}
            {film && <Flex vertical={true} align="center">
                <Link style={{alignSelf: 'flex-start'}} to='/' >
                    <Button
                        onClick={() => {dispatch(changeActiveStatus())}}
                        type='primary'
                        icon={<RollbackOutlined/>}>На главную</Button>
                </Link>
                <Card
                    style={{ width: 350, textAlign: 'left' }}
                    styles={{ body: { padding: '10px' } }}
                    cover={<img alt={film.Title} src={film.Poster} />}
                >
                    <Meta style={{textAlign: 'center'}} title={film.Title} />
                    <Meta title={`Год выпуска: ${film.Year}`} />
                    <Meta title={`Жанр: ${film.Genre}`} />
                    <Meta title={`Продолжительность: ${film.Runtime}`} />
                    <Meta title={`Режиссер: ${film.Director}`} />
                    <Meta title={`Актёры: ${film.Actors}`} />
                    <Meta title={`Рейтинг: ${film.imdbRating}`} />
                </Card>
            </Flex>}
        </>
    )
}
