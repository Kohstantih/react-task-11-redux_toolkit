import { DeleteOutlined } from "@ant-design/icons";

import { useAppSelector } from "../../hooks/redux";

import FilmsList from "../FilmsList/FilmsList";

export default function Favorites() {
    const favorites = useAppSelector((state) => state.favorites);
    
    return (
        <>
            {favorites.length === 0 &&
            <>
                <p>Ещё ничего не добавлено</p>
                <p>Вернитесь на главную...</p>
            </>}
            {favorites && <FilmsList list={favorites} icon={<DeleteOutlined />} />}
        </>
    )
}