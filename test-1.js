function isLuckyTicket(ticketNumber) {

    const halfLength = ticketNumber.length / 2;
    let firstHalfSum = 0;
    let secondHalfSum = 0;

    // Суммируем первую половину цифр
    for (let i = 0; i < halfLength; i++) {
        firstHalfSum += parseInt(ticketNumber[i], 10);
    }

    // Суммируем вторую половину цифр
    for (let i = halfLength; i < ticketNumber.length; i++) {
        secondHalfSum += parseInt(ticketNumber[i], 10);
    }

    // Сравниваем суммы
    return firstHalfSum === secondHalfSum;
}