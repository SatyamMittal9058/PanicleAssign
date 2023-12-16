export const PieChartData = (userData) => {
    const departments = {};
    userData.forEach((user) => {
        if (departments[user.department]) departments[user.department] = (departments[user.department] || 0) + 1;
        else departments[user.department] = 1;
    });

    const label = Object.keys(departments);
    const count = Object.values(departments);
    const bgColor = getBgcolor(userData.length);
    return (
        {
            label,
            count,
            bgColor,
        }
    )
}
const getBgcolor = (n) => {
    const colors = [];
    for (let i = 0; i < n; i++) {
        const randomColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.6)`;
        colors.push(randomColor);
    }
    return colors;
}
