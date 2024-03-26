import styled from "styled-components";

export const Form = styled.form`
    min-width: 100px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #86d1b7;
    border-radius: 10px;

    .input-container {
        padding: 10px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;

        input {
            width: 300px;
            height: 25px;
            font-size: 15px;
            padding: 8px;
        }
        
        textarea {
            width: 300px;
            font-size: 15px;
            padding: 9px;
            resize: none;
            height: 60px;
        }
    }
`