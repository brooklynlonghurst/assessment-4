const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)


const fortuneBtn = document.getElementById('fortuneButton')

const getFortune = () => {
    axios.get('http://localhost:4000/api/fortune').then(res => {
        const data = res.data
        alert(data)
    })
}

fortuneBtn.addEventListener('click', getFortune)


const createFortuneBtn = document.getElementById('createFortuneButton')
const createFortuneBox = document.getElementById('fortuneInputBox')

createFortuneBtn.addEventListener('click', () => {
    // event.preventDefault()

    const body = {
        create: createFortuneBox.value,
    }
    axios.post('http://localhost:4000/api/fortune', body).then((result) => {
        console.log(result.data)
    }).catch(() => {
        console.log('something went wrong')
    })
} )


const updateFortuneInput = document.getElementById('updateFortuneInputBox')
const updateFortuneBtn = document.getElementById('updateFortuneButton')

updateFortuneBtn.addEventListener('click', (event) => {
    event.preventDefault()

    const body = {
        update: updateFortuneInput.value
    }
    axios.put('http://localhost:4000/api/fortune', body).then((result) => {
        console.log(result.data)
    }).catch(() => {
        console.log('uh oh something went wrong while updating your fortune :(')
    })
})


const removeFortuneInput = document.getElementById('removeFortuneInputBox')
const removeFortuneBtn = document.getElementById('removeFortuneButton')

removeFortuneBtn.addEventListener('click', (event) => {
    event.preventDefault()

    let remove = removeFortuneInput.value

    axios.delete('http://localhost:4000/api/fortune/' + remove).then((result) => {
        console.log(result.data)
    }).catch(() => {
        console.log('oh dang, looks like you\'re stuck with this fortune forever')
    })
})