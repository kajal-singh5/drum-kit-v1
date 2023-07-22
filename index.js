const drumsArr = document.querySelectorAll(".drum");

let i = 0,
    len = drumsArr.length;

for (; i < len; i++) {

    drumsArr[i].addEventListener('click', function () {

        if (this.textContent === 'w') {
            const audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
        }

        else if (this.textContent === 'a') {
            const audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
        }

        else if (this.textContent === 's') {
            audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
        }

        else if (this.textContent === 'd') {
            audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
        }

        else if (this.textContent === 'j') {
            audio = new Audio("./sounds/snare.mp3");
            audio.play();
        }

        else if (this.textContent === 'k') {
            audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
        }

        else {
            audio = new Audio("./sounds/crash.mp3");
            audio.play();
        }

    });
}

document.addEventListener('keydown', function (event) {

    if (event.key === 'w') {
        const audio = new Audio("./sounds/tom-1.mp3");
        audio.play();
        document.querySelector(".w").classList.add("pressed");
        setTimeout(() => {
            document.querySelector(".w").classList.remove("pressed");
        }, "100");
    }

    else if (event.key === 'a') {
        const audio = new Audio("./sounds/tom-2.mp3");
        audio.play();
        document.querySelector(".a").classList.add("pressed");
        setTimeout(() => {
            document.querySelector(".a").classList.remove("pressed");
        }, "100");
    }

    else if (event.key === 's') {
        audio = new Audio("./sounds/tom-3.mp3");
        audio.play();
        document.querySelector(".s").classList.add("pressed");
        setTimeout(() => {
            document.querySelector(".s").classList.remove("pressed");
        }, "100");
    }

    else if (event.key === 'd') {
        audio = new Audio("./sounds/tom-4.mp3");
        audio.play();
        document.querySelector(".d").classList.add("pressed");
        setTimeout(() => {
            document.querySelector(".d").classList.remove("pressed");
        }, "100");
    }

    else if (event.key === 'j') {
        audio = new Audio("./sounds/snare.mp3");
        audio.play();
        document.querySelector(".j").classList.add("pressed");
        setTimeout(() => {
            document.querySelector(".j").classList.remove("pressed");
        }, "100");
    }

    else if (event.key === 'k') {
        audio = new Audio("./sounds/kick-bass.mp3");
        audio.play();
        document.querySelector(".k").classList.add("pressed");
        setTimeout(() => {
            document.querySelector(".k").classList.remove("pressed");
        }, "100");
    }

    else if (event.key === 'l') {
        audio = new Audio("./sounds/crash.mp3");
        audio.play();
        document.querySelector(".l").classList.add("pressed");
        setTimeout(() => {
            document.querySelector(".l").classList.remove("pressed");
        }, "100");
    }
})
