import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.color.woodsmoke};

    @media(max-width: ${({ theme }) => theme.breakpoint.mediumScreentMax}){
    };
`;

export const StyledHeader = styled.header`
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 1368px;
    height: 94px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mediumScreenMax}){
    margin: initial;
    height: 142px;
    justify-content: space-around;
    width: 100%;
    align-self: center;
    };
`;

export const TitleWrapper = styled.div`
    align-self: flex-start;
    display: flex;
    align-items: center;
    height: 100%;

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletMax}){
        margin: 0;
        align-self: center;
        justify-content: space-between;
    };

    @media(max-width: ${({ theme }) => theme.breakpoint.mediumScreenMax}){
        margin: 0 16px;
        align-self: center;
    };
`;

export const PageTitle = styled.h1`
    font-size: 24px;
    line-height: 40px;
    letter-spacing: -1,5px;
    color: ${({ theme }) => theme.color.white};
    padding-left: 16px;
    text-transform: capitalize;
    
    @media(max-width: ${({ theme }) => theme.breakpoint.tabletMax}){
    padding-left: 0;
    font-weight: 500;
    font-size: 13px;
    line-height: 130%;
    letter-spacing: -0.5px;
        width: auto;
    };
`;

export const CamerPicture = styled.img`
    width: 40px;
    height: 40px;

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletMax}){
    width: 17px;
    height: 17px;
    margin-right: 8px;
    };
`;