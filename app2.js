
const DRAW = document.querySelector("#draw");
const BUBLE = document.querySelector("#buble");
const SORT = document.querySelector("#sort");
const inputCARDS = document.querySelector("#nCards");












        return DRAW.innerHTML = "";
    })
};
const sortBuble = (array) => {
    BUBLE.addEventListener("click", () => {
        
        return bubbleSort(array);
    })
};

const sortSelect = (array) => {
    BUBLE.addEventListener("click", () => {
       return selectionSort(array);
    }) 
};


const selectionSortARR = inputArr => {
    let n = inputArr.length;

    for (let i = 0; i < n; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (inputArr[j][1] < inputArr[min][1]) {
                min = j;
            }
        }
        if (min != i) {
            let tmp = inputArr[i];
            inputArr[i] = inputArr[min];
            inputArr[min] = tmp;
        }
    }
    return inputArr;
};


const bubbleSortARR = inputArr => {
  let len = inputArr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (inputArr[j][1] > inputArr[j + 1]) {
        let tmp = inputArr[j];
        inputArr[j] = inputArr[j + 1];
        inputArr[j + 1] = tmp;
      }
    }
  }
  return inputArr;
};

/*const selectionSort = inputArr => { Array sort version
    let n = inputArr.length;

    for (let i = 0; i < n; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (inputArr[j] < inputArr[min]) {
                min = j;
            }
        }
        if (min != i) {
            let tmp = inputArr[i];
            inputArr[i] = inputArr[min];
            inputArr[min] = tmp;
        }
    }
    return inputArr;
};



const bubbleSort = inputArr => { version Buble
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
};
*/

