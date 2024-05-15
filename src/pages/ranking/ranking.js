import React, { useContext, useState, useEffect } from "react";
import { RankingContext } from "../../App";
import { Container, Contents } from "./styled";

export const Ranking = () => {
    const { value, setValue } = useContext(RankingContext);
    const [contents, setContents] = useState(null)

    useEffect(() => {
        setContents(
            value.sort((l, r) => {
                return r.score - l.score;
            })
        );
    }, [])


    return (
        <Container>
            {contents?.map((e, i) => {
                return (<Contents key={i}>
                    {e.name} {"    "} {e.score}
                </Contents>)
            })}
        </Container>
    )

}