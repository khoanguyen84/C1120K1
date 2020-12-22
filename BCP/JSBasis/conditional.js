let dtb = parseFloat(prompt('nhập điểm trung bình:'));
let rank = (dtb < 0 || dtb > 10) ? 'error' :
    dtb >= 9 ? 'xs' :
    dtb >= 8 ? 'gioi' :
    dtb >= 7 ? 'kha' :
    dtb >= 5 ? 'tb' :
    'yeu';

switch (rank) {
    case 'xs':
        console.log("Xuất sắc");
        break;
    case 'gioi':
        console.log("Giỏi");
        break;
    case 'kha':
        console.log("Khá");
        break;
    case 'tb':
        console.log("Trung bình");
        break;
    case 'yeu':
        console.log("Yếu");
        break;
    default:
        console.log("Điểm không hợp lệ");
        break;
}