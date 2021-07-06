//摄像头分组
export const groupByRegionName = (array) => {
    let data = {}
    for (let i = 0; i < array.length; i++) {
        let item = array[i]
        let name = item.regionName
        data[name] = data[name] ? data[name] : [];
        data[name].push(item)
    }
    let arr = []
    Object.keys(data).forEach(regionName => {
        arr.push({regionName, cameras: data[regionName]})
    })
    console.log(arr)
    arr.sort((a, b) => {
        let aName = a.regionName;
        let bName = b.regionName;
        let aIndex = aName.includes("栋") ? -2 : (aName.includes("岗") ? -1 : 0)
        let bIndex = bName.includes("栋") ? -2 : (bName.includes("岗") ? -1 : 0)
        if (aIndex !== bIndex) {
            return aIndex - bIndex
        }
        let regexp = /\d+/;
        let aNumber = regexp.exec(aName) ? regexp.exec(aName)[0] : 100;
        let bNumber = regexp.exec(bName) ? regexp.exec(bName)[0] : 100;
        if (aNumber !== bNumber) {
            return aNumber - bNumber
        }

        return aName.localeCompare(bName)
    })
    return arr
}