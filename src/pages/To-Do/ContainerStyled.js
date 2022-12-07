import styled from "styled-components";

const TodoContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 50vh;
width: 100%;
flex-direction: column;
gap: 30px;
`
export const Form = styled.form`
	display: flex;
	background-color: crimson;
	width: 50vw;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export default TodoContainer;