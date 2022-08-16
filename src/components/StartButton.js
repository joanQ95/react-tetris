import React from "react";
import { StyledButton } from "./styles/StyledStartButton";

const StartButton =({ callback}) => (
    <StyledButton onClick={callback}>Start Game</StyledButton>
)

export default StartButton