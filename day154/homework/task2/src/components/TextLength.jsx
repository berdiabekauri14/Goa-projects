export default function TextLength(text) {
    if (text.length() < 20) {
        return "Short text";
    } else {
        return "Long text";
    }
}