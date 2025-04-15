export default function Calculator() {
    const display = document.getElementById("display");
    const clearBtn = document.getElementById("clearBtn");

    const appendToDisplay = input => {
        display.value += input;
        clearBtn.textContent = "C";
    }

    const clearDisplay = () => {
        display.value = "";
        clearBtn.textContent = "AC";
    }

    const calculate = () => {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Error";
            console.error(error);
        }
    }

    return (
        <div id="container" className=" text-center">
            <input type="text" id="display" placeholder="0" className=" text-right p-2 border-black border-2" readOnly />
            <br />
            <div id="btns" className=" m-2">
                <button onClick={appendToDisplay("+")} className=" bg-orange-600 text-white cursor-pointer text-shadow-white m-2">+</button>
                <button onClick={appendToDisplay("-")} className=" bg-orange-600 text-white cursor-pointer text-shadow-white m-2">-</button>
                <button onClick={appendToDisplay("*")} className=" bg-orange-600 text-white cursor-pointer text-shadow-white m-2">*</button>
                <button onClick={appendToDisplay("/")} className=" bg-orange-600 text-white cursor-pointer text-shadow-white m-2">/</button>
                <button onClick={appendToDisplay("%")} className=" bg-orange-600 text-white cursor-pointer text-shadow-white m-2">%</button>
                <button onClick={calculate} className=" bg-orange-600 text-white cursor-pointer text-shadow-white m-2">=</button>
                <button onClick={appendToDisplay("1")} className=" cursor-pointer bg-gray-400 text-white m-2">1</button>
                <button onClick={appendToDisplay("2")} className=" cursor-pointer bg-gray-400 text-white m-2">2</button>
                <button onClick={appendToDisplay("3")} className=" cursor-pointer bg-gray-400 text-white m-2">3</button>
                <button onClick={appendToDisplay("4")} className=" cursor-pointer bg-gray-400 text-white m-2">4</button>
                <button onClick={appendToDisplay("5")} className=" cursor-pointer bg-gray-400 text-white m-2">5</button>
                <button onClick={appendToDisplay("6")} className=" cursor-pointer bg-gray-400 text-white m-2">6</button>
                <button onClick={appendToDisplay("7")} className=" cursor-pointer bg-gray-400 text-white m-2">7</button>
                <button onClick={appendToDisplay("8")} className=" cursor-pointer bg-gray-400 text-white m-2">8</button>
                <button onClick={appendToDisplay("9")} className=" cursor-pointer bg-gray-400 text-white m-2">9</button>
                <button onClick={appendToDisplay("0")} className=" cursor-pointer bg-gray-400 text-white m-2">0</button>
                <button onClick={clearDisplay} id="clearBtn" className=" bg-orange-600 text-white cursor-pointer text-shadow-white m-2">AC</button>
            </div>
        </div>
    )
}