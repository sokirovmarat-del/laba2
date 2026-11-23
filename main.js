const grades = [
    { name: "Макар", score: 85 },
    { name: "Денис", score: 92 },
    { name: "Анна", score: 78 },
    { name: "Даша", score: 88 },
    { name: "Студент_X", score: 45 }
];

// вычесление среднего
function calculateAverage(data) {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        sum = sum + data[i].score;
    }
    return sum / data.length;
}
// у кого больше всего баллов
function findTopStudent(data) {
    let topStudent = data[0];
    for (let i = 1; i < data.length; i++) {
        if (data[i].score > topStudent.score) {
            topStudent = data[i];
        }
    }
    return topStudent.name;
}
// не сдавшие
function filterFailed(data, passScore) {
    let failedNames = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].score < passScore) {
            failedNames.push(data[i].name);
        }
    }
    return failedNames;
}