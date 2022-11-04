$(() => {
    $(".bio").hide()
    $(".resume").hide()
    $(".projects").hide()
    $(".links").hide()

    const showHome = () => {
        $(".home").slideDown(1000)
        $(".bio").slideUp(1000)
        $(".resume").slideUp(1000)
        $(".projects").slideUp(1000)
        $(".links").slideUp(1000)
    }

    const showBio = () => {
        $(".home").slideUp(1000)
        $(".bio").slideDown(1000)
        $(".resume").slideUp(1000)
        $(".projects").slideUp(1000)
        $(".links").slideUp(1000)
    }

    const showResume = () => {
        $(".home").slideUp(1000)
        $(".bio").slideUp(1000)
        $(".resume").slideDown(1000)
        $(".projects").slideUp(1000)
        $(".links").slideUp(1000)
    }

    const showProjects = () => {
        $(".home").slideUp(1000)
        $(".bio").slideUp(1000)
        $(".resume").slideUp(1000)
        $(".projects").slideDown(1000)
        $(".links").slideUp(1000)
    }

    const showLinks = () => {
        $(".home").slideUp(1000)
        $(".bio").slideUp(1000)
        $(".resume").slideUp(1000)
        $(".projects").slideUp(1000)
        $(".links").slideDown(1000)
    }

    $("#home").on('click', showHome)
    $("#bio").on('click', showBio)
    $("#resume").on('click', showResume)
    $("#projects").on('click', showProjects)
    $("#links").on('click', showLinks)

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
})