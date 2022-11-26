import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [produtos, setProdutos] = useState([])
    function adcionarItemAoCarrinho(id, foto, nome, valor) {

        const item = [...produtos]
        const itemFiltrado = item.find((prod) => prod.id === id)

        if (!itemFiltrado) {
            item.push({
                id: id,
                foto: foto,
                nome: nome,
                valor: valor,
                quantidade: 1
            })

        } else {
            itemFiltrado.quantidade = itemFiltrado.quantidade + 1
        }
        setProdutos(item)
    }

    function removerItem(id) {
        const item = [...produtos]
        const itemFiltrado = item.find((prod) => prod.id === id)
        if (itemFiltrado && itemFiltrado.quantidade > 1) {
            itemFiltrado.quantidade = itemFiltrado.quantidade - 1;
            setProdutos(item);

        }
        else {
            const arrayFiltered = item.filter((product) => product.id !== id);
            setProdutos(arrayFiltered);

        }
    }
    function deleteItem (id){

        const item = [...produtos]
        const arrayFiltered = item.filter((product) => product.id !== id);
            setProdutos(arrayFiltered);
    }

    function limparCarrinho(){
        setProdutos([]);
    }
    return (
        <CartContext.Provider value={{ produtos, adcionarItemAoCarrinho, removerItem,deleteItem,limparCarrinho }}>
            {children}
        </CartContext.Provider>
    );

}
