import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LinkItemStyle = styled(NavLink)`

text-decoration: none;
font-size: 16px;
color: white;

&.active{
color: rebeccapurple;
}
`

