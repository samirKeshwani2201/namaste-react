
// import { useState } from "react";
import { useState } from "react";
const Section = ({ title, description, isVisible, setIsVisible }) => {
    return (

        <div className="border p-2 m-2 border-black" >
            <h3 className="font-bold text-xl " >{title}</h3>
            {isVisible ? (
                <button
                    onClick={() => setIsVisible()}
                    className="cursor-pointer underline"
                >Hide</button>
            ) : (
                <button
                    onClick={() => setIsVisible()}
                    className="cursor-pointer underline"
                >Show
                </button>
            )
            }
            {isVisible && <p>{description}</p>}
        </div>

    );
};


const Instamart = () => {

    const [visibleSection, setVisibleSection] = useState("about")
    return (
        <div>
            <h1 className="text-3xl p-2 m-2 font-bold" >Instamart</h1>
            <Section title={"About Instamart"}
                isVisible={visibleSection === "about"}
                setIsVisible={
                    () =>
                        ((visibleSection === "about") ? setVisibleSection("") : setVisibleSection("about"))
                }
                description={"This is about section of instamart "} />
            <Section title={"Team Instamart"}
                isVisible={visibleSection === "team"}
                setIsVisible={
                    () =>
                        ((visibleSection === "team") ? setVisibleSection("") : setVisibleSection("team"))

                }
                description={"This is team section of instamart "} />
            <Section title={"Carrers"}
                isVisible={visibleSection === "carrer"}
                setIsVisible={
                    () =>
                        ((visibleSection === "carrer") ? setVisibleSection("") : setVisibleSection("carrer"))

                }
                description={"This is carrer section of instamart "} />
        </div>
    )
};
export default Instamart;
