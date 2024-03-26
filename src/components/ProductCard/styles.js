import styled from "styled-components";

export const CardContainer = styled.div`
    background-color: #86d1b7;
    border-radius: 5px;
    padding: 10px;
    margin-top: 20px;

    .card-container {
        background-color: #d2e4f4;
        border-radius: 10px;
        padding: 10px;
        max-width: 300px;
        margin-top: 20px;
        text-transform: capitalize;

        p {
            margin-bottom: 2px;
        }
    }

    .btn-new-product {
        cursor: pointer;
        width: 100px;
        border-radius: 5px;
        border: none;
        padding: 5px;
        margin-top: 10px;

        &:hover {
            background-color: #b2c0cb;
        }
    }
`