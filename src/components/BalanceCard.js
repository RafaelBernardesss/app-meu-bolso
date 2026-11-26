// ============================================================================
// COMPONENTE: BalanceCard  (cartão escuro com o SALDO ATUAL)
// ----------------------------------------------------------------------------
// Exemplo de COMPOSIÇÃO: usamos o AppCard como base e apenas trocamos a cor.
// ============================================================================

import { Text, StyleSheet } from 'react-native';
import AppCard from './AppCard';
// formatCurrency transforma 1234.5 em "R$ 1.234,50".
import { formatCurrency } from '../utils/format';

// Recebe apenas uma prop: "balance" (o saldo já calculado pela home).
export default function BalanceCard({ balance }) {
  return <AppCard style={styles.card}>
    <Text style={styles.label}>Saldo atual</Text>
    <Text style={styles.value}>{formatCurrency(balance)}</Text>
  </AppCard>;
}
const styles=StyleSheet.create({
  card:{backgroundColor:'#2f3640'}, // sobrescreve o fundo branco do AppCard
  label:{color:'#dcdde1'}, value:{color:'#fff',fontSize:30,fontWeight:'900',marginTop:6}
});
