import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 40px auto 103px;
  display: flex;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    margin: 32px auto 32px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const Button = styled.button`
  margin: 0 6px;
  padding: 8px 16px;
  background: ${({ theme }) => theme.color.pattensblue};
  color: ${({ theme }) => theme.color.woodsmoke};
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    filter: brightness(80%);
  }
  &:disabled {
    background: ${({ theme }) => theme.color.mystic};
    color: ${({ theme }) => theme.color.woodsmoke};
    cursor: default;
    filter: brightness(100%);
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    padding: 8px 12px;
    margin: 0px 8px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    &:disabled {
      background: ${({ theme }) => theme.color.mystic};
      color: ${({ theme }) => theme.color.woodsmoke};
      cursor: default;
      filter: brightness(100%);
    }
  }
`;
export const PaginationText = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.color.waterloo};
  line-height: 24px;
  align-self: center;

  margin: 0px 8px;
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}) {
    font-size: 14px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 12px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}) {
    font-size: 10px;
    margin: 0 2px;
    line-height: 24px;
    font-weight: 600;
  }
`;
export const PaginationNumber = styled.span`
  color: ${({ theme }) => theme.color.woodsmoke};
  font-weight: 600;
  line-height: 24px;
  margin: 0px 8px;
  align-self: center;
  font-size: 16px;
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}) {
    font-size: 14px;
    margin: 0 6px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 12px;
    margin: 0 4px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}) {
    font-size: 10px;
    margin: 0 2px;
    line-height: 24px;
    font-weight: 600;
  }
`;

export const First = styled.span`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    display: none;
  } ;
`;
export const Previous = styled.span`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    display: none;
  } ;
`;
export const Next = styled.span`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    display: none;
  } ;
`;
export const Last = styled.span`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    display: none;
  } ;
`;
