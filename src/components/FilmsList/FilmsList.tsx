import { Flex } from "antd";

import FilmsListItem from "./FilmsListItem";

import './FilmsListItem.css'
import { TFilmSearchObj } from "../../types/TFilmSearchObj";

export default function FilmsList({ list, icon }: {list: TFilmSearchObj[], icon: React.ReactNode}) {

    return (
        <Flex vertical={true}>
            {list.map((item, index) => <FilmsListItem key={index} filmObj={item} icon={icon} />)}
        </Flex>
    )
}