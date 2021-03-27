
class PartThree {

    findYoungest(data){
        let rows = data.split("\n");

        for (let i = 0; i < rows.length; i++) {
            rows[i] = rows[i].split(", ")
        }

        let ages = [];
        for (let i = 0 ; i < rows.length ; i++) {
            ages.push(Number(rows[i][1]))
        }

        const min = Math.min(...ages)

        for (let i = 1 ; rows.length ; i++ ) {
            if (Number(rows[i][1]) === min) {
                person = rows[i][0];
            }
        }

        return person;
    }

    findLongestName(data){
        return data;
    }

    findCoOwner(data){
        return data;
    }

    findStudents(data){
        return data;
    }

}

module.exports = PartThree;