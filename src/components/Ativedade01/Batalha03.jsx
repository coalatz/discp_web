const Heroi = ({name, imag}) => (
    <div>
        <h2>heroi {name}</h2>
        <img 
        src = {imag}
        width = {200}
        />
    </div>
)
const Vilao = ({nome, image}) => (
    <div>
       <h2>vilao {nome}</h2>
        <img
        src = {image}
        width = {200}
        />
    </div>
)

export {Heroi, Vilao}