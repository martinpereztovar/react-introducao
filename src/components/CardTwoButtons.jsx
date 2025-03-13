// eslint-disable-next-line react/prop-types
export const CardTwoButtons= ({urlImagem, titulo, descricao}) => {
    return(
        <div>
            <img src={urlImagem} alt={titulo} />
            <div>
            <button>Click Aqui</button>
            <button>Click Aqui</button>
            </div>
                       <h3>{titulo}</h3>
            <p>{descricao}</p>
                
        </div>
    )
}
