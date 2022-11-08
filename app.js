$(() => {
    // Nav bar
    $(".bio").hide()
    $(".resume").hide()
    $(".projects").hide()

    const showHome = () => {
        $(".home").slideDown(1000)
        $(".header").slideDown(1000)
        $(".bio").slideUp(1000)
        $(".resume").slideUp(1000)
        $(".projects").slideUp(1000)
    }

    const showBio = () => {
        $(".home").slideUp(1000)
        $(".header").slideDown(1000)
        $(".bio").slideDown(1000)
        $(".resume").slideUp(1000)
        $(".projects").slideUp(1000)
    }

    const showResume = () => {
        $(".home").slideUp(1000)
        $(".header").slideDown(1000)
        $(".bio").slideUp(1000)
        $(".resume").slideDown(1000)
        $(".projects").slideUp(1000)
    }

    const showProjects = () => {
        $(".home").slideUp(1000)
        $(".header").slideUp(1000)
        $(".bio").slideUp(1000)
        $(".resume").slideUp(1000)
        $(".projects").slideDown(1000)
    }

    $("#home").on('click', showHome)
    $("#bio").on('click', showBio)
    $("#resume").on('click', showResume)
    $("#projects").on('click', showProjects)
})

$(() => {
    // Project carousel
    $(".project-hangman").hide()
    $(".project-space-battle").hide()
    $(".project-color-compare").hide()

    let currentImage = 0
    let numOfImages = $(".image-container").children().length - 1

    $('.next-button').on('click', () => {
        $('.image-container').children().eq(currentImage).css('display', 'none')
        for (let i = 0; i < numOfImages + 1; i++) {
            $('.projects-container').children().eq(i).slideUp(1000)
        }
        if (currentImage < numOfImages) {
            currentImage++
        } else {
            currentImage = 0
        }
        $('.image-container').children().eq(currentImage).css('display', 'block')
        $('.projects-container').children().eq(currentImage).slideDown(1000)
    })

    $('.previous-button').on('click', () => {
        $('.image-container').children().eq(currentImage).css('display', 'none')
        for (let i = 0; i < numOfImages + 1; i++) {
            $('.projects-container').children().eq(i).slideUp(1000)
        }
        if (currentImage > 0) {
            currentImage--
        } else {
            currentImage = numOfImages
        }
        $('.image-container').children().eq(currentImage).css('display', 'block')
        $('.projects-container').children().eq(currentImage).slideDown(1000)
    })
})

$(() => {
    // Landscaper Game
    const player = {
        items: [
            {
                item: 'teeth',
                price: 0,
                earning: 1
            },
            {
                item: 'rusty scissors',
                price: 5,
                earning: 5
            },
            {
                item: 'old-timey push lawnmower',
                price: 25,
                earning: 50
            },
            {
                item: 'fancy battery-powered lawnmower',
                price: 250,
                earning: 100
            },
            {
                item: 'team of starving students',
                price: 500,
                earning: 250
            },
        ]
    }

    let currentItem = 0
    let playersBalance = 0

    $('#playersBalance').text('Current Balance: ' + playersBalance)
    $('#currentItem').text('Current Item:' + player.items[0].item)

    $('#cutGrass').on('click', function() {
        playersBalance += player.items[currentItem].earning
        $('#playersBalance').text('Current Balance: ' + playersBalance)
        if (playersBalance >= 1000 && currentItem == 4) {
            alert("You have finished the game!")
        }
    })

    $('#buyItem').on('click', function() {
        if (currentItem == 4) {
            alert("You can't upgrade anymore!")
        } else if (playersBalance >= player.items[currentItem + 1].price) {
            playersBalance -= player.items[currentItem + 1].price
            currentItem += 1
            $('#playersBalance').text('Current Balance: ' + playersBalance)
            $('#equippedItem').text('Current Item: ' + player.items[currentItem].item)
        } else if (playersBalance < player.items[currentItem + 1].price) {
            alert("You don't have enough money to buy!")
        }
    })
})

// Hangman
$(() => {

})

//Resume button
$(() => {
    $('.btn').on('click', function() {
        window.location.href = "documents/resume.pdf"
    })
})