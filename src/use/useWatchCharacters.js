import { watch } from 'vue'

export function useWatchCharacters(valueToWatch, maxChars = 100) {
    watch(valueToWatch, (newWalue) => {
        if (newWalue.length === maxChars) {
            alert(`Max ${maxChars} Length`);
        }
    })
}