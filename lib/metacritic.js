export async function getMetacritic() {
    const LATEST_GAMES = "https://api.imdbapi.dev/titles";

    const rawData = await fetch(LATEST_GAMES);
    const json = await rawData.json();
    const { titles } = json;

    return titles.map((item) => {
        const {
            id,
            type,
            primaryTitle,
            startYear,
            primaryImage,
            rating,
            genres,
            plot,
        } = item;
        let aggregateRating = "Sin Calificación";
        if (rating) {
            aggregateRating = rating.aggregateRating;
        }

        const { url } = primaryImage;
        const img = url;

        const genre = genres.join(", ");

        return {
            id,
            type,
            primaryTitle,
            startYear,
            aggregateRating,
            genre,
            img,
            plot,
        };
    });
}

export async function getGameDetails(slug) {
    const GAME_DETAILS = `https://internal-prod.apigee.fandom.net/v1/xapi/composer/metacritic/pages/games/${slug}/web?&apiKey=1MOZgmNFxvmljaQR1X9KAij9Mo4xAY3u`;

    const rawData = await fetch(GAME_DETAILS);
    const json = await rawData.json();

    const { components } = json;
    const { title, description, criticScoreSummary, images } = components[0];
    const { score } = criticScoreSummary;

    const cardImage = images.find((image) => image.typeName === "cardImage");
    const { bucketType, bucketPath } = cardImage;
    const img = `https://www.metacritic.com/a/img/${bucketType}${bucketPath}`;

    const rawRevies = components[3].data.items;

    const reviews = rawRevies.map((review) => {
        const { quote, score, date, publicationName, author } = review;
        return {
            quote,
            score,
            date,
            publicationName,
            author,
        };
    });
    return {
        img,
        title,
        slug,
        description,
        score,
        reviews,
    };
}
