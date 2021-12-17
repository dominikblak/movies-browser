import { Link } from "react-router-dom";
import styled from "styled-components";

export const PersonLink = styled(Link)`
    text-decoration: none;
    color: white;
    
    &.active {
      border: 1px solid ${({ theme }) => theme.color.white};
      border-radius: 24px;
      padding: 8px 12px;
    };
`;