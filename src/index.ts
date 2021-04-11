import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numbersCollection = new NumbersCollection([10, 3, 77, 1]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection(`XaaCwecqw`);
charactersCollection.sort();
console.log(charactersCollection.data);
