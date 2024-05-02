import styled from "styled-components";

const HomePageLayout = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #fffae5;
    position: relative;
    z-index: 9;
    .header-section{
        border-bottom: 1px solid #000;
    }
    .page-body{
        width: 95%;
        margin: 0 auto;
    }
`;


export default HomePageLayout