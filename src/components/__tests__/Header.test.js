import { render } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import store from "../../utils/store"
import { StaticRouter } from "react-router-dom/server"

test("Logo should load on rendering header ", () => {
    //Load Header 
    //Check if logo is loaded
    const header = render(
        <StaticRouter>
            <Provider store={store}><Header /></Provider>
        </StaticRouter>)

    const logo = header.getAllByTestId("logo");

    expect(logo[0].src).toBe("http://localhost/dummy.png");



}
);



test("Cart should have 0 items on rendering header ", () => {
    //Load Header 
    //Check if logo is loaded
    const header = render(
        <StaticRouter>
            <Provider store={store}><Header /></Provider>
        </StaticRouter>)

    const cart = header.getByTestId("cart");

    expect(cart.innerHTML).toBe("Cart- 0 items");



}
);
