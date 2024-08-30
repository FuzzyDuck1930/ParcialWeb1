import "./Card.css"

function Cards({hotelName, CardImg, price, ubication, services}){
    return (
    <div id="aaaa">
        <img src={CardImg} alt="" />
        <div id="helpMe"><h3>{hotelName}</h3> <input name="Input" value="myInput" type="radio"></input></div>
        <p>${price}</p>
        <p>{ubication}</p>
        <p>{services}</p>
    </div>)
}

export default Cards