        const toggler = document.querySelector('#togglebtn');
        const menu = document.querySelector('.left');
        const togglerhide = document.querySelector('.togglerhide');

        togglerhide.addEventListener('click', () => {
            menu.classList.remove('show');
        });

        toggler.addEventListener('click', () => {
            menu.classList.toggle('show');
        });

        const pencilThikness = document.querySelector('#pencil-thikness');
        for (let i = 1; i <= 10; i++) {
            let option = new Option(i, i);
            pencilThikness.appendChild(option);
        }

        const colorPicker = document.querySelector("#color-picker")
        const canvabg = document.querySelector("#canvabg")
        const canvas = document.querySelector("#myCanvas")
        const clearall = document.querySelector("#clearbtn")
        const save = document.querySelector("#savebtn")

        const ctx = canvas.getContext("2d")
        isDrawing = false
        lastX = 0;
        lastY = 0;

        colorPicker.addEventListener('change', (e) => {
            ctx.strokeStyle = e.target.value
            ctx.fillStyle = e.target.value
        })
        canvas.addEventListener('mousedown', (e) => {
            isDrawing = true
            lastX = e.offsetX
            lastY = e.offsetY
        })
        canvabg.addEventListener('change', (e) => {
            ctx.fillStyle = e.target.value
            ctx.fillRect(0, 0, 940, 500)
        })
        canvas.addEventListener('mousemove', (e) => {
            if (!isDrawing) return
            ctx.beginPath()
            ctx.moveTo(lastX, lastY)
            ctx.lineTo(e.offsetX, e.offsetY)
            ctx.stroke()
            lastX = e.offsetX
            lastY = e.offsetY
        })
        pencilThikness.addEventListener('change', (e) => {
            ctx.lineWidth = e.target.value
        })
        clearall.addEventListener('click', (e) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
        })
        save.addEventListener('click', () => {
            let link = document.createElement('a')
            link.download = 'mySignature.png'
            link.href = canvas.toDataURL()
            link.click()
        })

        canvas.addEventListener('mouseup', () => isDrawing = false)
        canvas.addEventListener('mouseout', () => isDrawing = false)

