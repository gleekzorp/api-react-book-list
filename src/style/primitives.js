import styled from 'styled-components';

const Title = styled.h1`
    color: ${props => props.color || "red"};
    text-align: center;
`

const Subtitle = styled.h2`
    color: purple;
`

const FlexArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    flex-direction: ${props => props.flexDirection};
`

const NavBar = styled.div`
    width: 100%;
    background-color: turquoise;
`

const BookCard = styled.div`
    width: 75vw;
    border: 1px solid black;
    border-radius: 10px;
    margin-bottom: 10px;
    padding: 0px 10px;
    box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
`

export {
    Title,
    Subtitle,
    FlexArea,
    NavBar,
    BookCard
}