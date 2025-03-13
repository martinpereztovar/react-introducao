// eslint-disable-next-line react/prop-types
export const CardButton= ({urlImagem, titulo, descricao}) => {
    return(
        <div>
            <h3>{titulo}</h3>
            <p>{descricao}</p>
            <img src={urlImagem} alt={titulo} />
            <div>
                <button>Click Aqui</button>
            </div>
                
        </div>
    )
}
