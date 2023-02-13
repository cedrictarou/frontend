import type { Ref } from 'vue'
export const useCounter = () => {
	// stateの定義
	const counter: Ref<number> = useState('counter', () => 0)

	// stateの更新処理
	const updateCounter = (counter: Ref<number>) => () => {
		counter.value++;
	}

	return {
		counter: readonly(counter), // stateはreadonlyとし、update関数を通してのみ更新できる
		updateCounter: updateCounter(counter),
	}
}