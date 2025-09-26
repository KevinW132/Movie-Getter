export async function getMetacritic() {
    const LATEST_GAMES = "https://api.imdbapi.dev/titles";

    const rawData = await fetch(LATEST_GAMES);
    const json = await rawData.json();
    const { titles } = json;

    return titles.map((item) => {
        const { id, primaryTitle, primaryImage, rating, plot } = item;
        let aggregateRating = "SC";
        if (rating) {
            aggregateRating = rating.aggregateRating;
        }

        const { url } = primaryImage;
        const img = url;

        return {
            id,
            primaryTitle,
            aggregateRating,
            img,
            plot,
        };
    });
}

export async function getVideoById(id) {
    const GAME_DETAILS = `https://api.imdbapi.dev/titles/${id}`;

    const rawData = await fetch(GAME_DETAILS);
    const json = await rawData.json();

    const title = json;
    const {
        primaryTitle,
        type,
        primaryImage,
        startYear,
        genres,
        rating,
        plot,
        stars,
    } = title;

    let aggregateRating = "SC";
    if (rating) {
        aggregateRating = rating.aggregateRating;
    }

    const { url } = primaryImage;
    const img = url;
    const genre = genres.join(", ");

    return {
        primaryTitle,
        type,
        startYear,
        genre,
        plot,
        aggregateRating,
        img,
    };
}
export async function getCreditsById(id) {
    const GAME_DETAILS = `https://api.imdbapi.dev/titles/${id.id}/credits`;

    const rawData = await fetch(GAME_DETAILS);
    const json = await rawData.json();
    const { credits } = json;
    let director = [];
    let writer = [];
    let star = [];

    credits.map((item) => {
        if (item.category === "director") {
            const { name } = item;
            const { displayName, primaryImage } = name;
            let image = null;
            if (primaryImage) {
                const { url } = primaryImage;
                image = url;
            }
            const actor = { name: displayName, img: image };
            director.push(actor);
        } else if (item.category === "writer") {
            const { name } = item;
            const { displayName, primaryImage } = name;
            let image = null;
            if (primaryImage) {
                const { url } = primaryImage;
                image = url;
            }
            const actor = { name: displayName, img: image };
            writer.push(actor);
        } else if (item.category === "actor" || item.category === "actress") {
            const { name } = item;
            const { displayName, primaryImage } = name;
            let image = null;
            if (primaryImage) {
                const { url } = primaryImage;
                image = url;
            }
            const actor = { name: displayName, img: image };
            star.push(actor);
        }
    });
    return {
        director,
        writer,
        star,
    };
}
