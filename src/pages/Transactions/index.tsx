import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions(){
  return (
    <div>
      <Header/>
      <Summary/>

    <TransactionsContainer>
      <SearchForm/>
      <TransactionsTable>
        <tbody>
          <tr>
            <td width="40%">Desenvolvimento do Site</td>
            <td><PriceHighlight variant="income">R$ 12.000</PriceHighlight></td>
            <td>Venda</td>
            <td>13/05/2023</td>
          </tr>
          <tr>
            <td width="40%">Alimentação</td>
            <td><PriceHighlight variant="outcome">- R$ 12.000</PriceHighlight></td>
            <td>Venda</td>
            <td>13/05/2023</td>
          </tr>
        </tbody>
      </TransactionsTable>
    </TransactionsContainer>
    </div>
  )
}