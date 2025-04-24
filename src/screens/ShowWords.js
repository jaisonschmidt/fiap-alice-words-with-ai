import { LayoutDefault, Paragraph, Button, Card } from '../components/index';
import { routeMap } from '../utils/constants';

export default function ShowWords({ navigation, route }) {
  const data = route.params || {};

  console.log('data', data);

  const handleMemoButton = () => {
    navigation.navigate(routeMap.WAIT);
  }

  return (
    <LayoutDefault>
      <Paragraph text="Memorize as palavras abaixo:" />

      {data.map((word, key) => <Card title={word.word} key={key} />)}

      <Button title="Memorizei!" onPress={() => handleMemoButton()} />
    </LayoutDefault>
  );
}