const down = () => {
    return (
        <>
            

    <a href="#top">Top</a>
    <a href="#middle">Middle</a>
    <a href="#bottom">Bottom</a>
    <div id="top"><a href="top"></a>Top</div>
    <div id="middle"><a href="middle"></a>Middle</div>
    <div id="bottom"><a href="bottom"></a>Bottom</div>

    
    
</>
    )
}
const Section = styled.section`
 #top,#middle,#bottom{
    height: 600px;
    width: 300px;
    background: green; 
}
`;




